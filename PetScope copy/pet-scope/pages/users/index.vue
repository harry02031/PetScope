<template>
  <section class="users-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Users in Database</span>
          <nuxt-link class="button--grey" style="padding: 5px 20px; text-decoration: none;" to="/users/add">Add User</nuxt-link>
        </div>
        <br>
        <!-- <ul style="list-style-type: none; padding: 0; margin: 0;"> -->
          <table>
            <th>Username</th> <th>Pet Name</th> <th>Breed</th> <th>Animal Type</th>
            <tr v-for="(user, index) in users" :key="index" style="padding: 10px 20px; margin: 0 25px; position: relative;">
            <!-- <nuxt-link :to="{ path: `/users/${user.username}`, params: { username: user.username }}"> -->
              <td>
                {{ user.username }}
              </td>
              <td>
                {{ user.name }}
              </td>
              <td>
                {{ user.breed }}
              </td>
              <td>
                {{ user.animaltype }}
              </td>
              <td>
          <!-- </nuxt-link> -->
                <!-- <button type="button" class="button--grey" style="padding: 5px 20px; text-decoration: none;" @click="deleteUser(user.userid, user.username)">Delete User</button> -->
              </td>
            </tr>
          </table>
          <!-- </li>
        </ul> -->
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },

  methods: {
    deleteUser (userID, name) {
      let self = this
      axios.post('/api/users/', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            userid: userID
          }})
        .then((res) => {
          // res.data should contain the url for redirecting... bad practice
          self.$nuxt.$router.push('/users/' + name)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },
  head () {
    return {
      title: 'Users'
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
  td
    padding 10px
    text-align center
</style>