<template>
  <section class="user-view">
    <div class="content">
      <div class="subsection">
        <span class="user-username" style="padding: 10px 0 10px 10px; margin: 10px 0 10px 0;">{{ user.username }}</span>
        <span class="user-password" style="padding: 10px 10px; margin: 10px 0 10px 0;">{{ `(${user.password})` }}</span>
        <nuxt-link :to="{ path: `/users/${user.username}/update`, params: { username: user.username }}">Update</nuxt-link>
      </div>
      <div style="margin: 25px 10px;">
        <span class="subsection-title" style="vertical-align: middle;">Post a Lost Pet</span>
        <nuxt-link class="button--grey" style="padding: 5px 20px; text-decoration: none;" to="/lost/add">Add Pet</nuxt-link>
      </div>
        <table>
            <th>Pet ID</th> <th>Pet Name</th> <th>Breed</th>
            <tr v-for="(pet, index) in pets" :key="index" style="padding: 10px 20px; margin: 0 25px; position: relative;">
            <!-- <nuxt-link :to="{ path: `/users/${user.username}`, params: { username: user.username }}"> -->
                {{ pet.pid }}
              <td>
                {{ pet.name }}
              </td>
              <td>
                {{ pet.breed }}
              </td>
              <td>
          <!-- </nuxt-link> -->
                <button type="button" class="button--grey" style="padding: 5px 20px; text-decoration: none;" @click="foundPet(pet.pid)">Found!</button>
              </td>
            </tr>
          </table>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
let first
let saveparams

export default {
  // name: 'username',
  asyncData ({ params, error }) {
    saveparams = params
    return axios.get('/api/users/' + params.username)
      .then((res) => {
        first = res
        // return { user: res.data }
        return axios.post('/api/users/' + params.username)
          .then((result) => {
            return { pets: result.data, user: first.data }
          })
          .catch((e) => {
            error({ statusCode: 404, message: 'User not found' })
          })
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'User not found' })
      })
  },
  methods: {
    foundPet (petID) {
      axios.post('/api/users/' + saveparams.username, {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            pid: petID
          }
      }).then(data => {
        // something
        self.$nuxt.$router.push('/')
      })
    }
  },
  head () {
    return {
      title: `User: ${this.user.username}`
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
  .user-password
    font-size 24px
    font-weight 500
    color #707070
  a
    text-decoration underline
    &:hover
      color #515ec4
  td
    padding 10px
    text-align center
</style>
