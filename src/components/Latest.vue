<template>
  <div class="articles">
    <h1 class="tag">最新</h1>
    <div class="article" v-for="x in latest">
      <a :href="x.url">
        <p class="title">{{ x.title }}</p>
      </a>
        <div class="content">{{ x.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Latest',
  data () {
    return {
      latest: this.$parent._data.latest
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
