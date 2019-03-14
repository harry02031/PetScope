<template>
  <section class="lost-view">
    <div class="content">
      <div class="subsection">
         <!-- <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Post a Lost Pet</span>
          <nuxt-link class="button--grey" style="padding: 5px 20px; text-decoration: none;" to="/lost/add">Add Pet</nuxt-link>
        </div>  -->
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Refine Your Search:</span>
          </div>
        <form style="margin: 15px 15px;">
          <div style="margin: 10px 0;">
            <span class="lost-lat">Latitude: </span>
            <input type="number" step="any" :value="lostLat" v-model="lostLat"></input>
          </div>
          <div style="margin: 10px 0;">
            <span class="lost-long">Longitude: </span>
            <input type="number" step="any" v-model="lostLong"></input>
          </div>
          <div style="margin: 10px 0;">
            <span class="radius">Radius: </span>
            <input type="number" step="any" v-model="radius"></input>
          </div>
        </form>
        <button type="button" class="button--grey" @click="submitQuery">Submit</button>
        <ul style="list-style-type: none; padding: 0; margin: 0;">
          <li id="listing" v-for="(pet, index) in lostPets" :key="index" style="padding: 10px 20px; margin: 0 25px; position: relative;">
            <nuxt-link :to="{ path: `/lost/${pet.pid}`, params: { pid: pet.pid, name: pet.name }}">
            {{ pet.name }}
             </nuxt-link>
            <button type="button" class="button--grey" style="padding: 5px 20px; text-decoration: none;" @click="deletePet(pet.pid)">Delete Pet</button>
            <button type="button" class="button--grey" style="padding: 5px 20px; text-decoration: none;" @click="reportSighting(pet.pid)">Report Sighting</button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/lost')
    return { lostPets: data }
  },
  data () {
    return {
      lostLat: '',
      lostLong: '',
      radius: ''
    }
  },

  methods: {
    deletePet (petID) {
      let self = this
      axios.post('/api/lost/delete/' + petID, {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            pid: petID
          }})
        .then((res) => {
          // res.data should contain the url for redirecting... bad practice
          self.$nuxt.$router.go()
        })
        .catch((e) => {
          // console.log(e)
        })
    },
    reportSighting (petID) {
      let self = this
      // route = path: '/lost/:pid/sighting', component: {pid: petID}, props: true}
      self.$nuxt.$router.push('/lost/' + petID + '/sighting')
    },
    submitQuery () {
      let self = this
      axios.post('/api/lost', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            lostLat: self.lostLat,
            lostLong: self.lostLong,
            radius: self.radius
          }
      })
        .then(result => {
          self.lostPets = result.data
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },
  head () {
    return {
      title: 'Lost'
    }
  }
}
</script>

<style lang="stylus" scoped>
.users-view
  padding-top 0

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
    font-size 26px
    font-weight 500
  .title
    font-size 18px
    font-weight 500
  a
    text-decoration underline
    &:hover
      color #515ec4

</style>