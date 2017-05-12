import Vue from 'vue'
import Router from 'vue-router'
import Topic from '@/components/Topic'
import TopicList from '@/components/TopicList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/topic',
      name: 'TopicList',
      component: TopicList
    },
    {
      path: '/topic/:name',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/article/:name',
      name: 'Article',
      component: Topic
    },
    {
      path: '/user/:name',
      name: 'User',
      component: Topic
    }
  ]
})
