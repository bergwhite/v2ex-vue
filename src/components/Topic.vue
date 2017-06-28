<template>
  <transition name="fade" mode="in-out">
    <!-- 内容状态 加载中 -->
    <div v-if="!this.$store.state.latestJSON.article" class="article-loading" v-html="this.$store.state.articleLoadState.current">
    </div>
    <!-- 内容状态 加载完成 -->
    <div v-else class="articles">
      <!-- 渲染 分类 -->
      <h1 class="tag" v-text="renderTopicName() || '最新'"></h1>
      <!-- 从Vuex中加载文章 -->
      <div class="article" v-for="topic in this.$store.state.latestJSON.article">
        <!-- 渲染 标题 -->
        <div class="title">
          <ul class="title-wrap">
            <li>
              <a :href="'/#/topic/' + topic.node.name">
                <p class="title-node">[{{ topic.node.title }}]</p>
              </a>
            </li>
            <li>
              <a :href="'/#/article/' + topic.id">
                <p class="title-article">{{ topic.title }}</p>
              </a>
            </li>
          </ul>
        </div>
        <!-- 渲染 内容 -->
        <div class="content" v-html="compiledMarkdown(topic.content)"></div>
        <div class="info">
          <!-- 渲染 头像 -->
          <img class="info-img" :data-src="topic.member.avatar_normal"></img>
          <div class="info-more">
            <!-- 渲染 用户名 -->
            <p class="info-user"><a :href="'/#/user/'+topic.member.username">{{ topic.member.username }}</a></p>
            <!-- 渲染 评论 -->
            <p class="info-comm">回复 {{ topic.replies }}</p>
          </div>
        </div>
      </div>
      <!-- 评论状态 不加载 -->
      <div v-if="this.$store.state.latestJSON.comm === null"></div>
      <!-- 评论状态 加载中 -->
      <div v-else-if="this.$store.state.latestJSON.comm === 'loading'" class="comm-state">
        评论加载中
      </div>
      <!-- 评论状态 为空 -->
      <div v-else-if="this.$store.state.latestJSON.comm.length === 0" class="comm-state">
        评论为空
      </div>
      <!-- 评论状态 加载完成 -->
      <div v-else>
        <!-- 从Vuex中加载评论 -->
        <div class="info comm" v-for="comm in this.$store.state.latestJSON.comm">
          <!-- 渲染 头像 -->
          <img class="info-img" :data-src="comm.member.avatar_normal"></img>
          <div class="info-more">
            <!-- 渲染 用户名 -->
            <p class="info-user"><a :href="'/#/user/'+comm.member.username">{{ comm.member.username }}</a></p>
            <!-- 渲染 评论 -->
            <p class="info-comm">{{ comm.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'latest',
  data () {
    return {
      // 设置主题的中文别名（这里只设置了部分别名）
      topicAlias: {
        latest: '最新',
        hot: '热门',
        programmer: '程序员',
        jobs: '酷工作'
      }
    }
  },
  created () {
    // 首屏加载
    this.updateVal()
  },
  updated () {
    // 执行图片懒加载
    this.$store.commit('imgLazyLoad')
  },
  watch: {
    // 路由改变则重新渲染页面
    '$route': 'updateVal'
  },
  methods: {
    // 传入markdown格式内容
    // 返回渲染后的HTML结构
    compiledMarkdown (txt) {
      return this.$marked(txt, { sanitize: true })
    },
    // 渲染主题的中文别名
    renderTopicName () {
      if (this.$route.name === 'Article') {
        return '文章'
      } else if (this.$route.name === 'User') {
        return this.$route.params.name + '的所有文章'
      } else {
        return this.topicAlias[this.$route.params.name] || this.$route.params.name
      }
    },
    // 渲染页面
    updateVal () {
      // 执行之前先清空评论内容
      // 修复从文章页跳转到用户文章列表页时，最后会显示上一次的评论的问题
      this.$store.commit('setCommToNull')
      // 渲染页面
      if (this.$route.name === 'Article') {
        // 渲染文章页
        // 获取主题
        this.$store.dispatch('getTopicByParams', {
          name: this.$route.name,
          params: this.$route.params.name
        })
        // 获取评论
        this.$store.dispatch('getCommByArticle', {
          name: 'comm',
          params: this.$route.params.name
        })
        this.log('router')
      } else if (this.$route.path !== '/' && this.$route.params.name !== 'hot' && this.$route.params.name !== 'latest') {
        // 渲染首页以及热门和最新主题
        this.$store.dispatch('getTopicByParams', {
          name: this.$route.name,
          params: this.$route.params.name
        })
        this.val = this.$store.getters.getApiVal
        this.log('router')
      } else {
        // 渲染其他主题
        this.$store.dispatch('getTopic', this.$route.params.name)
        this.val = this.$store.getters.getApiVal
        this.log('router')
      }
    },
    // 调试代码
    log (type) {
      if (type === 'router') {
        console.log('router: ' + this.$route)
        console.log('paramsName: ' + this.$route.params.name)
      }
    }
  }
}
</script>

<style scoped>

/* 文章 */

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
  word-break: break-all;  /* 内容过长自动换号显示 */
}
.title,.content,.info {
  padding: 20px 40px;
}
.title {
  background-color: #2196f3;
  color:white;
}
.title-wrap  {
  overflow: hidden;
}
.title-node {
  color: #ffeb3b;
  margin-right: 10px;
}
.title-article {
  color: white;
}
.title-node, .title-article {
  float: left;
}

/* 文章内容 */

.content {
  color: black;
  background-color: white;
  border: 1px solid #2196f3;
  border-bottom: 0;
}

/* 文章信息 */

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
  margin-left: 58px;  /* 避免图片加载时的抖动 */
}

/* 文章评论 */

.comm {
  border: 0;
  margin-left: 20px;
}
.comm-state {
  margin-left: 118px;
  padding-bottom: 20px;
}
</style>
