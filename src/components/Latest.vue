<template>
  <div class="articles">
    <h1 class="tag">最新</h1>
    <div class="article" v-for="x in updateJSON">
      <a :href="x.url" target="_black">
        <p class="title">{{ x.title }}</p>
      </a>
      <div class="content" v-html="compiledMarkdown(x.content)"></div>
      <div class="info">
        <img class="info-img" :src="x.member.avatar_normal"></img>
        <div class="info-more">
          <p class="info-user">{{ x.member.username }}</p>
          <!-- <p class="info-time" v-html="'发表 '+transTime(x.created)"></p> -->
          <p class="info-comm">回复 {{ x.replies }}</p>
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
      latest: ''
    }
  },
  methods: {
    compiledMarkdown (txt) {
      return this.$marked(txt, { sanitize: true })
    },
    transTime (time) {
      const tm = new Date(time)
      const tmArr = [tm.getFullYear(), tm.getMonth() + 1, tm.getDay()]
      return tmArr.join('-')
    }
  },
  computed: {
    updateJSON () {
      this.latest = this.$parent._data.latest
      return this.latest
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
