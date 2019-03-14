<template>
  <section class="add-sighting-view">
  <div class="content">
    <div class="subsection">
      <div style="margin: 25px 10px;">
        <span class="subsection-title" style="vertical-align: middle;">Report a Sighting:</span>
        <form style="margin: 25px 15px;" id="sighting-form" @submit="checkForm" method="post">

          <div style="margin: 10px 0;">
            <span label for = "uid" class="uid">User ID: </span>
            <input type="number" :value="uid" v-model="uid">
          </div>
          <div style="margin: 10px 0;">
            <span label for = "date" class="date">Date: </span>
            <input type="date" :value="date" v-model="date">
          </div>
          <div style="margin: 10px 0;">
            <span label for = "time" class="time">Time: </span>
            <input type="time" v-model="time">
          </div>
          <div style="margin: 10px 0;">
            <span class="lost-lat">Latitude: </span>
            <input type="number" step="any" :value="latitude" v-model="latitude"></input>
          </div>
          <div style="margin: 10px 0;">
            <span class="lost-long">Longitude: </span>
            <input type="number" step="any" v-model="longitude"></input>
          </div>
          <div style="margin: 10px 0;">
            <textarea name="desc" cols="40" rows="5" form="sighting-form" :value="desc" v-model="desc">Enter description here</textarea>
          </div>
        <input type="submit" class="button--grey" value="Submit">
        </form>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {

  asyncData ({ params, error }) {
    return axios.get('/api/lost/' + params.pid + '/sighting')
      .then((res) => {
        console.log(res.data)
        return { sighting: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Sighting not found' })
      })
  },
  /*
  data () {
    let self = this
    return {
      errors: [],
      uid: '',
      pid: self.pid,
      date: '',
      time: '',
      latitude: '',
      longitude: '',
      description: ''
    }
  },
*/
  methods: {
    checkForm: function (e) {
      this.errors = []
      if (!this.uid) {
        this.errors.push('User required.')
      }
      if (!this.date) {
        this.errors.push('Date required.')
      }
      if (!this.time) {
        this.errors.push('Time required.')
      }
      if (!this.latitude) {
        this.errors.push('Latitude required.')
      }
      if (!this.longitude) {
        this.errors.push('Longitude required.')
      }
      if (!this.errors.length) {
        console.log('no errors')
        this.submitInsert()
      }
      e.preventDefault()
    },
    submitInsert () {
      let self = this
      console.log(self.pid)
      axios.post('/api/lost/sighting', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            pid: self.sighting.pid,
            uid: self.uid,
            date: self.date,
            time: self.time,
            latitude: self.latitude,
            longitude: self.longitude,
            description: self.desc
          }})
        .then((res) => {
          // res.data should contain the url for redirecting... bad practice
          self.$nuxt.$router.replace('/lost')
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },

  head () {
    return {
      title: `Add New Sighting`
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-view
  padding-top 0

.content
  position absolute
  width 100%

.subsection-title
    margin 25px 10px
    font-size 26px
    font-weight 500

.subsection
  background-color #fff
  border-radius 2px
  margin 25px 0
  transition all .5s cubic-bezier(.55,0,.1,1)
  padding 10px 30px 10px 30px
  position relative
  line-height 20px
  
  a
    text-decoration underline
  &:hover
    color #515ec4

</style>
