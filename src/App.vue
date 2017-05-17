<template>
  <div id="app">
    <div class="nav">
      <div class="logo">V2EX-Vue</div>
      <div class="topic">
        <router-link to="/">首页</router-link>
        <router-link to="/topic/hot">热门</router-link>
        <router-link to="/topic/programmer">程序员</router-link>
        <router-link to="/topic/jobs">酷工作</router-link>
        <router-link to="/topic">全部</router-link>
      </div>
    </div>
    <p class="request-tip">当前页面剩余请求次数：{{ this.$store.state.remainRequest }}</p>
    <router-view></router-view>
    <div class="footer">Developed by Vue &amp; Vue-router &amp; Vuex &amp; axios. Author: <a href="https://github.com/bergwhite" target="_blank" class="blue">bergwhite</a></div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

/* 字体 */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  overflow: hidden;
}

/* 样式重置 */

* {
  box-sizing: border-box; /* 使用border为边界的盒模型 */
}
body {
  margin: 0;
}
ul,li,p {
  margin:0;
  padding: 0;
}
li {
  list-style-type:none; /* 清除圆点 */
}
a {
  text-decoration: none;  /* 移除下划线 */
  color: black;
}
img {
  max-width: 100%;  /* 适配移动端 */
}

/* 默认样式 */

.blue {
  color: #2196f3;
}
.article-loading {
  width: 100%;
  height: 500px;
  text-align: center;
  line-height: 500px;
}

/* 文字选中时的样式 */

::selection {
  color: red;
  background-color: white;
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
  margin-top: 8px;  /* align the layout */
}
.topic {
  width: 400px;  /* 移动端换行排版 */
  overflow:hidden;  /* 清除浮动 */
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

.request-tip {
  padding-left: 20px;
}

/* 底部 */

.footer {
  background-color: #795548;
  color: white;
  padding: 20px;
  text-align: center;
  position: fixed;  /* 底部固定 */
  bottom: 0px;
  width: 100%;
  height: 60px;
}

</style>
