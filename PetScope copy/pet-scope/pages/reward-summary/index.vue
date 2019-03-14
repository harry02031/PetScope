<template>
  <section class="user-view">
    <div class="content">
      <div class="subsection">
      <div style="margin: 25px 10px;">
        <span class="subsection-title" style="vertical-align: middle;">Rewards Summary: </span>
      </div>
      <div style="margin: 25px 25px;">
        <table>
            <th>Pet Type:</th> <th>Average Reward Amount:</th>
            <tr v-for="(entry, index) in rewardData" :key="index" style="padding: 45px 45px; margin: 0 25px; position: relative;">
            <!-- <nuxt-link :to="{ path: `/users/${user.username}`, params: { username: user.username }}"> -->
              <td>
                {{ entry.animaltype }}
              </td>
              <td>
                ${{ entry.amount }}
              </td>
              <td>
              </td>
            </tr>
          </table>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  // name: 'username',
  asyncData ({ params, error }) {
    return axios.get('/api/reward-summary/')
      .then((res) => {
        return { rewardData: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Reward data not found' })
      })
  },
  methods: {}
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
  th, td {
    padding 20px
    text-align center
  }
</style>
