<template>
  <section class="user-view">
  <div class="content">
    <div class="subsection">
    <form style="margin: 15px 15px;" @submit="checkForm" method="post">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
      <div style="margin: 10px 0;">
        <span label for = "username" class="user-username">Username: </span>
        <input type="text" :value="username" v-model="username">
      </div>
      <div style="margin: 10px 0;">
        <span label for = "password" class="user-password">Password: </span>
        <input type="password" v-model="password">
      </div>
      <div style="margin: 10px 0;">
        <span label for = "phoneNumber" class="user-password">Phone Number: </span>
        <input type="tel" :value="phoneNumber" v-model="phoneNumber">
      </div>
    <input type="submit" class="button--grey" value="Submit">
    </form>
    </div>
  </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {

  data () {
    return {
      errors: [],
      userid: '',
      username: '',
      password: '',
      phoneNumber: ''
    }
  },

  methods: {
    checkForm: function (e) {
      this.errors = []
      if (!this.username) {
        this.errors.push('Name required.')
      }
      if (!this.password) {
        this.errors.push('Password required.')
      }
      if (!this.phoneNumber) {
        this.errors.push('Phone number required.')
      } else if (!this.validPhoneNumber()) {
        this.errors.push('Valid phone number required.')
      }
      if (!this.errors.length) {
        console.log('no errors')
        this.submitInsert()
      }
      e.preventDefault()
    },
    validPhoneNumber () {
      var pattern = /^\d{10}$/
      return this.phoneNumber.match(pattern)
    },
    submitInsert () {
      console.log('submitted add user request')
      let self = this

      axios.post('/api/users/add', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            username: self.username,
            password: self.password,
            phoneNumber: self.phoneNumber

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
      title: `Add New User`
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
