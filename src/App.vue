<template>
  <div id="app">
    <div class="nav">
      <div class="logo">V2EX-Vue</div>
      <div class="topic">
        <router-link to="/">首页</router-link>
        <router-link to="/topic/hot">热门</router-link>
        <router-link to="/topic">全部</router-link>
      </div>
    </div>
    <router-view></router-view>
    <div class="footer">Developed by Vue &amp; Vue-router &amp; Vuex &amp; axios.</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

/* reset */

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

/* loading */

.loading {
  width: 100%;
  height: 500px;
  text-align: center;
  line-height: 500px;
}

/* when select */

::selection {
  color: red;
  background-color: white;
}

/* default */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  overflow: hidden;
}

/* nav */

.nav {
  overflow: hidden;
}
.logo,.topic {
  padding: 20px;
}
.logo {
  float: left;
  margin-top: 8px;  /* align the layout */
}
.topic {
  width: 200px;
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

/* content */

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
.comm {
  border: 0;
  margin-left: 20px;
}

/* footer */

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
