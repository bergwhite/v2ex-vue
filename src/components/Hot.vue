<template>
  <div class="articles">
    <h1 class="tag">热门</h1>
    <div class="article" v-for="x in hot">
	  <a :href="x.url" target="_black">
	    <p class="title">{{ x.title }}</p>
	  </a>
	    <div class="content">{{ x.content }}</div>
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
  created () {
    // this.$parent.getJSON('/api/topics/hot.json', 'hot')
  },
  methods: {
    ge: function () {
      console.log(self)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
