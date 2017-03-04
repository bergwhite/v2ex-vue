import Vue from 'vue'
import Router from 'vue-router'
import Latest from '@/components/Latest'
import Hot from '@/components/Hot'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Latest',
      component: Latest
    },
    {
      path: '/hot',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    }
  ]
})
