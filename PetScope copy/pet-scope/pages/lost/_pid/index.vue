<template>
  <section class="pet-view">
  <div class="content">
    <div class="subsection">
      <form style="margin: 15px 15px;">
        <span class="subsection-title" style="vertical-align: middle;">Pet Overview:</span>
        <div style="margin: 20px 20px;">
          <span class="att-label">Name: </span>
          <span class="pet-name">{{pet.name}}</span>
        </div>
        <div style="margin: 20px 20px;">
          <span class="att-label">Sex: </span>
          <span class="pet-sex">{{pet.sex}}</span><br>
        </div>
        <div style="margin: 20px 20px;">
          <span class="att-label">Breed: </span>
          <span class="pet-breed">{{pet.breed}}</span>
        </div>
        <div style="margin: 20px 20px;">
          <span class="att-label">Date of Birth: </span>
          <span class="pet-sex">{{pet.birthdate}} </span>
        </div>
        <div style="margin: 20px 20px;">
          <span class="att-label">Lost latitude: </span>
          <span class="pet-lat">{{pet.lostlat}} </span>
        </div>
        <div style="margin: 20px 20px;">
          <span class="att-label">Lost longitude: </span>
          <span class="pet-long">{{pet.lostlong}} </span>
        </div>
        <div style="margin: 20px 20px;">
          <span class="att-label">Lost on {{pet.lostdate}} at {{pet.losttime}}</span>
        </div>
      </form>
      <div style="margin: 20px 20px;">
      <span class="subsection-title" style="vertical-align: middle;">Summary of sightings: </span>
      </div>
      <ul style="list-style-type: none; padding: 0; margin: 0;">
          <li id="listing" v-for="(sighting, index) in sightings" :key="index" style="padding: 10px 20px; margin: 0 25px; position: relative;">
            <span class="att-label ">Date: </span>
            <span class="pet-breed">{{sighting.date}}</span>
            <span class="att-label">Time: </span>
            <span class="pet-sex">{{sighting.time}} </span>
            <span class="att-label">Latitude: </span>
            <span class="pet-sex">{{sighting.lat}} </span>
            <span class="att-label">Longitude: </span>
            <span class="pet-sex">{{sighting.long}} </span>
            <span class="att-label">Description: </span>
            <span class="pet-sex">{{sighting.description}} </span>
          </li>
        </ul>
    </div>
  </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  pid: 'pid',
  async asyncData ({ params, error }) {
    let [petRes, sightingsRes] = await Promise.all([
      axios.get('/api/lost/' + params.pid),
      axios.get('/api/lost/' + params.pid + '/sightings/all')
    ])
      .catch((e) => {
        error({ statusCode: 404, message: 'Pet not found' })
      })
    console.log(petRes.data)
    console.log(sightingsRes.data)
    return {pet: petRes.data, sightings: sightingsRes.data}
  },
  head () {
    return {
      title: `Pet: ${this.pet.name}`
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-view
  padding-top 10px

.content
  position absolute
  width 100%

.subsection
  background-color #fff
  border-radius 2px
  margin 25px 0
  transition all .5s cubic-bezier(.55,0,.1,1)
  padding 10px 30px 10px 30px
  position relative
  line-height 20px
  .subsection-title
    margin 25px 10px
    font-size 36px
    font-weight 700
  .att-label
    font-size 16px
    font-weight 700
    color #707070
  a
    text-decoration underline
  &:hover
    color #515ec4

</style>
