<template>
  <section class="users-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Find Users Who Adopted A Certain Breed Of Animal:</span>
          </div>
        <form style="margin: 15px 15px;">
          <div style="margin: 10px 0;">
            <span class="">Breed: </span>
            <input type="text" step="any" :value="breed" v-model="breed"></input>
          </div>
        </form>
        <button type="button" class="button--grey" @click="submitQuery">Submit</button>
        <ul style="list-style-type: none; padding: 0; margin: 0;">
          <li id="listing" v-for="(user, index) in users" :key="index" style="padding: 10px 20px; margin: 0 25px; position: relative;">
            {{ user.username }}
            <!-- <button type="button" class="button--grey" style="padding: 5px 20px; text-decoration: none;" @click="deletePet(pet.pid)">Delete Pet</button>
            <button type="button" class="button--grey" style="padding: 5px 20px; text-decoration: none;" @click="reportSighting(pet.pid)">Report Sighting</button> -->
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
let self

export default {
  asyncData ({ params, error }) {
    console.log(params)
    self = params
    return axios.get('/api/shelters/' + params.campus + '/' + params.branch)
      .then((res) => {
        console.log(res.data)
        return { users: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'User not found' })
      })
  },
  methods: {
    deletePet (petID) {
      axios.post('/api/lost', {
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
    submitQuery () {
      let that = this
      // console.log('params: ' + params)
      axios.post('/api/shelters/' + self.campus + '/' + self.branch, {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            breed: that.breed
          }
      })
        .then(result => {
          console.log(result)
          that.users = result.data
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },
  head () {
    return {
      title: 'Branch'
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