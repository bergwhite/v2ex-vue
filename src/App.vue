<template>
  <div id="app">
    <div class="nav">
      <div class="logo">V2EX-Vue</div>
      <div class="topic">
        <router-link to="/">最新</router-link>
        <router-link to="/Hot">热门</router-link>
      </div>
    </div>
    <router-view></router-view>
    <div class="footer">模板使用的是vue-cli。数据使用proxyTable代理，通过xmlHttpRequest获取。</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      latest: '',
      hot: ''
    }
  },
  created () {
    this.getJSON('/api/topics/latest.json', 'latest')
    this.getJSON('/api/topics/hot.json', 'hot')
  },
  methods: {
    getJSON (url, tag) {
      var current = this
      var XMLHttp = new XMLHttpRequest()
      XMLHttp.onreadystatechange = function () {
        if (XMLHttp.readyState === 4 && XMLHttp.status === 200) {
          var result = JSON.parse(XMLHttp.responseText)
          current._data[tag] = result
          console.log(current._data[tag])
        }
      }
      XMLHttp.open('GET', url, true)
      XMLHttp.send()
    }
  }
}
</script>

<style>

/* 重置 */

body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
ul,li,p {
  margin:0;
  padding: 0;
}
li {
  list-style-type:none;
}
a {
  text-decoration: none;
  color: black;
}
img {
  max-width: 100%;  /* support for mobile*/
}

/* 选中时 */

::selection {
  color: red;
  background-color: white;
}

/* 默认 */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

/* 导航 */

.nav {
  overflow: hidden;
}
.logo,.topic {
  padding: 20px;
}
.logo {
  float: left;
}
.topic {
  overflow:hidden;
  padding-bottom: 0px;
}
.topic>a {
  float:left;
  padding:5px;
  border-bottom:1px solid white;
}
.topic>a:hover {
  background-color: #2196f3;
  color: white;
}

/* 正文 */

.articles {
  margin-bottom: 60px;
}
.tag {
  padding: 0 20px;
}
.article {
  padding: 10px 20px;
}
.title,.content {
  word-break: break-all;
}
.title,.content,.info {
  padding: 20px 40px;
}
.title {
  background-color: #2196f3;
  color:white;
}
.content {
  color: black;
  background-color: white;
  border: 1px solid #2196f3;
  border-bottom: 0;
}
.info {
  overflow: hidden;
  border: 1px solid #2196f3;
  border-top: 0;
  padding-top: 0;
}
.info-img {
  float: left;
}
.info-more {
  overflow: hidden;
  padding-left: 10px;
}

/* 底部 */

.footer {
  background-color: #795548;
  color: white;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 60px;
}

</style>
