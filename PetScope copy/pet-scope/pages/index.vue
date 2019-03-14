<template>
  <section class="container">
    <div>
    <img class = "front-logo" src="~/assets/img/front-logo.png" alt="Front Logo" width="75%" height="75%">
      <h1 class="title">
        PetScope
      </h1>
      <div class="links">
        <nuxt-link class="button--grey link" style="margin-left: 15px; margin-top: 15px" to="/users">Create an Account</nuxt-link>
        <!-- <nuxt-link :to="{ path: `/signin` }" class="button--grey link" style="margin-left: 15px;">Sign In</nuxt-link> -->
        <nuxt-link class="button--grey link" style="margin-left: 15px;" to="/lost">View Lost Pets</nuxt-link>
        <nuxt-link class="button--grey link" style="margin-left: 15px;" to="/shelters">View Shelters</nuxt-link>
        <nuxt-link class="button--grey link" style="margin-left: 15px;" to="/reward-summary">Reward Summary</nuxt-link>
        <button type="button" class="button--grey" style="margin-top: 30px; padding: 5px 20px; text-decoration: none;" @click="signIn()">Sign In</button>
        <button type="button" class="button--grey" style="padding: 5px 20px; text-decoration: none;" @click="reset()">Reset DB</button>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from '~/plugins/axios'

export default {
  components: {
    Logo
  },
  methods: {
    reset () {
      axios.post('/api/main/', {
        headers:
          {
            'Content-Type': 'application/json'
          }
      }).then(data => {
        // something
      })
    },
    signIn () {
      let self = this
      return axios.get('/api/signin').then(res => {
        console.log(res)
        axios.get('/api/users/' + res.data).then(result => {
          console.log(res.data)
          let s = res.data
          self.$nuxt.$router.push('/users/' + s)
        }).catch(error => {
          console.log(error)
        })
      }).catch(err => {
        console.log(err)
      })
    }
  },
  head () {
    return {
      title: 'Main'
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  min-height 90vh
  display flex
  justify-content center
  align-items center
  text-align center

@media (min-height 1080px)
  .container
    margin-top -200px

.title
  font-family "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif /* 1 */
  display block
  font-weight 300
  font-size 100px
  color #35495e
  letter-spacing 1px

.subtitle
  font-weight 300
  font-size 42px
  color #526488
  word-spacing 5px
  padding-bottom 15px

.links
  padding-top 15px

@media (max-width 860px)
  .title
    font-size 64px
  .subtitle
    font-size 32px

@media (max-width 860px)
  .links
    .link
      width 50%
      margin-bottom 15px
      display relative
</style>
