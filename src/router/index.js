import Vue from 'vue'
import Router from 'vue-router'
import Topic from '@/components/Topic'
import TopicList from '@/components/TopicList'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'Topic',
      component: Topic
    },
    // 主题清单页
    {
      path: '/topic',
      name: 'TopicList',
      component: TopicList
    },
    // 分类页
    {
      path: '/topic/:name',
      name: 'Topic',
      component: Topic
    },
    // 文章页
    {
      path: '/article/:name',
      name: 'Article',
      component: Topic
    },
    // 用户文章清单页
    {
      path: '/user/:name',
      name: 'User',
      component: Topic
    }
  ]
})
