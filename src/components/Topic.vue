<template>
  <div v-if="!this.$store.state.apiState.val" class="loading">
    loading...
  </div>
  <div v-else class="articles">
    <h1 class="tag" v-text="getTopicName() || '最新'"></h1>
    <div class="article" v-for="topic in this.$store.state.apiState.val">
      <a :href="topic.url" target="_black">
        <p class="title">{{ topic.title }}</p>
      </a>
      <div class="content" v-html="compiledMarkdown(topic.content)"></div>
      <div class="info">
        <img class="info-img" :src="topic.member.avatar_normal"></img>
        <div class="info-more">
          <p class="info-user"><a :href="'/#/user/'+topic.member.username">{{ topic.member.username }}</a></p>
          <!-- <p class="info-time" v-html="'发表 '+transTime(topic.created)"></p> -->
          <p class="info-comm">回复 {{ topic.replies }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'latest',
  data () {
    return {
      val: '',
      type: this.$route.params.name,
      topicNameList: {
        latest: '最新',
        hot: '热门'
      }
    }
  },
  created () {
    this.updateVal()
    this.val = this.$store.getters.getApiVal
    console.log('updated')
    console.log(this.val)
  },
  watch: {
    '$route': 'updateVal'
  },
  methods: {
    compiledMarkdown (txt) {
      return this.$marked(txt, { sanitize: true })
    },
    transTime (time) {
      const tm = new Date(time)
      const tmArr = [tm.getFullYear(), tm.getMonth() + 1, tm.getDay()]
      return tmArr.join('-')
    },
    getTopicName () {
      return this.topicNameList[this.$route.params.name] || this.$route.params.name
    },
    updateVal () {
      if (this.$route.path !== '/' && this.$route.params.name !== 'hot' && this.$route.params.name !== 'latest') {
        this.$store.dispatch('getTopicByParams', {
          name: this.$route.name,
          params: this.$route.params.name
        })
        this.val = this.$store.getters.getApiVal
        console.log(this.$route)
        console.log('paramsName: ' + this.$route.params.name)
      } else {
        this.$store.dispatch('getTopic', this.$route.params.name)
        this.val = this.$store.getters.getApiVal
        console.log(this.$route)
        console.log('paramsName: ' + this.$route.params.name)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
