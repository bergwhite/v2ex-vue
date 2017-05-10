<template>
  <div class="articles">
    <h1 class="tag">热门</h1>
    <div class="article" v-for="x in hot">
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
  name: 'Hot',
  data () {
    return {
      hot: this.$parent._data.hot
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
