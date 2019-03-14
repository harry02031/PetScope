<template>
  <section class="user-view">
  <div class="content">
    <div class="subsection">
      <form style="margin: 15px 15px;">
        Please Enter Your Pet's Information
        <div style="margin: 10px 0;">
          <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
          </p>
          <span class="pet-name">Name: </span>
          <input type="text" :value="name" v-model="name"></input>
        </div>
        <div style="margin: 10px 0;">
          <span class="pet-sex">Sex: </span><br>
          <input type="radio" id="M" value="M" v-model="sex">
          <label for="M"> Male</label>
          <br>
          <input type="radio" id="F" value="F" v-model="sex">
          <label for="F"> Female </label>
        </div>
        <div style="margin: 10px 0;">
          <span class="pet-type">Species: </span>
          <input type="text" v-model="species"></input>
        </div>
        <div style="margin: 10px 0;">
          <span class="pet-sex">Breed: </span>
          <input type="text" v-model="breed"></input>
        </div>
        <div style="margin: 10px 0;">
          <span class="pet-sex">Date Lost: </span>
          <input type="date" v-model="lostDate"></input>
        </div>
        <div style="margin: 10px 0;">
          <span class="pet-sex">Date of Birth: </span>
          <input type="date" v-model="birthDate"></input>
        </div>
        <div style="margin: 10px 0;">
          <span class="pet-sex">Time Lost: </span>
          <input type="time" v-model="lostTime"></input>
        </div>
        <div style="margin: 10px 0;">
          <span class="pet-sex">Lost Latitude: </span>
          <input type="number" v-model="lostLat"></input>
        </div>
        <div style="margin: 10px 0;">
          <span class="pet-sex">Lost Longitude: </span>
          <input type="number" v-model="lostLong"></input>
        </div>
        <div style="margin: 10px 0;">
          <span class="pet-sex">Reward UID: </span>
          <input type="number" v-model="uid"></input>
        </div>
        <div style="margin: 10px 0;">
          <span class="pet-sex">Reward Amount: </span>
          <input type="number" v-model="reward"></input>
        </div>
      </form>
      <button type="button" class="button--grey" @click="checkForm">Add Pet</button>
    </div>
  </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
// import { stringify } from 'querystring'

export default {

  data () {
    return {
      errors: [],
      pid: '',
      name: '',
      sex: '',
      species: '',
      breed: '',
      birthDate: '',
      lostDate: '',
      lostTime: '',
      lostLat: '',
      lostLong: '',
      uid: '',
      reward: ''
    }
  },

  methods: {
    checkForm: function (e) {
      this.errors = []
      if (!this.name) {
        this.errors.push('Name required.')
      }
      if (!this.sex) {
        this.errors.push('Password required.')
      }
      if (!this.species) {
        this.errors.push('Species required.')
      }
      if (!this.birthDate) {
        this.errors.push('Birthdate required.')
      }
      if (!this.lostDate) {
        this.errors.push('Lost date required.')
      }
      if (!this.lostTime) {
        this.errors.push('Lost time required.')
      }
      if (!this.lostLat) {
        this.errors.push('Lost latitude required.')
      }
      if (!this.lostLong) {
        this.errors.push('Lost longitude required.')
      }
      if (!this.reward) {
        this.errors.push('Reward amount required.')
      }
      if (!this.uid) {
        this.errors.push('UserID required.')
      }
      if (!this.errors.length) {
        console.log('no errors')
        this.submitInsert()
      }
      e.preventDefault()
    },
    submitInsert () {
      console.log('submitted add pet request')
      let self = this

      axios.post('/api/lost/add', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            pid: self.pid,
            name: self.name,
            sex: self.sex,
            species: self.species,
            breed: self.breed,
            birthDate: self.birthDate,
            lostDate: self.lostDate,
            lostTime: self.lostTime,
            lostLat: self.lostLat,
            lostLong: self.lostLong,
            uid: self.uid,
            reward: self.reward
          }})
        .then((res) => {
          // res.data should contain the url for redirecting... bad practice
          self.$nuxt.$router.replace({ path: res.data })
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },

  head () {
    return {
      title: `Add Another Pet`
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
    font-size 26px
    font-weight 500
  .user-username
    font-size 24px
    font-weight 500
    color #707070
  .user-password
    font-size 24px
    font-weight 500
    color #707070
  a
    text-decoration underline
  &:hover
    color #515ec4

</style>
