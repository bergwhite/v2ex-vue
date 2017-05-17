import axios from 'axios'  // 导入异步请求库

export default {
  // 通过传入主题类型
  // 返回主题下的文章
  getTopic ({commit, state}, type) {
    // 清空文章和评论
    state.latestJSON.comm = null
    state.latestJSON.article = null
    state.articleLoadState.current = state.articleLoadState.default  // 重置加载文章的提示
    let url = null
    console.log('getTopic > type: ' + type)
    if (type === undefined) {
      // 请求首页
      state.latestJSON.current = 'latest' // 保存最近请求的aip类型
      url = state.api[state.latestJSON.current] // 提取URL
    } else {
      // 请求其他页
      state.latestJSON.current = type // 保存最近请求的aip类型
      url = state.api[state.latestJSON.current] // 提取URL
    }
    // 发起异步请求
    axios.get(url)
      .then(function (res) {
        console.log(res)
        if (res.status === 200) {
          state.latestJSON.article = res.data  // 存储返回的文章
          state.remainRequest = res.headers['x-rate-limit-remaining']  // 更新剩余请求数
          commit('imgLazyLoad') // 渲染可视界面的图片
        } else if (res.status === 403) {
          // 当返回状态为403时，显示友好提示
          state.articleLoadState.current = '请求次数达到限制，感兴趣的可以下到本地进行使用哦'
        }
      })
      .catch(function (err) {
        console.log(err)
      })
    console.log('getTopic > url: ' + url)
  },
  // 传入主题类型以及参数
  // 返回主题下的文章
  getTopicByParams ({commit, state}, type) {
    // 清空文章和评论
    state.latestJSON.article = null
    state.latestJSON.article = null
    state.articleLoadState.current = state.articleLoadState.default  // 重置加载文章的提示
    let url = null
    console.log('getTopicByParams > type: ' + type.name)
    console.log('getTopicByParams > params: ' + type.params)
    if (type.name !== undefined && type.params !== undefined) {
      // 传入主题类型和参数后才能发起异步请求
      type.name = type.name.toLowerCase()
      state.latestJSON.current = type.name  // 保存最近请求的aip类型
      url = state.api[state.latestJSON.current] + type.params // 提取URL
    }
    // 发起异步请求
    axios.get(url)
      .then(function (res) {
        if (res.status === 200) {
          state.latestJSON.article = res.data // 存储返回的文章
          state.remainRequest = res.headers['x-rate-limit-remaining']  // 更新剩余请求数
          commit('imgLazyLoad') // 渲染可视界面的图片
        } else if (res.status === 403) {
          // 当返回状态为403时，显示友好提示
          state.articleLoadState.current = '请求次数达到限制，感兴趣的可以下到本地进行使用哦 <a href="https://github.com/bergwhite/v2ex-vue">v2ex-vue</a>'
        }
      })
      .catch(function (err) {
        console.log(err)
      })
    console.log('getTopicByParams > url: ' + url)
  },
  getCommByArticle ({commit, state}, type) {
    state.latestJSON.comm = 'loading'
    let url = null
    console.log('getCommByArticle > type: ' + type.name)
    console.log('getCommByArticle > params: ' + type.params)
    if (type.name !== undefined && type.params !== undefined) {
      type.name = type.name.toLowerCase()
      state.latestJSON.current = type.name // 保存最近请求的aip类型
      url = state.api[state.latestJSON.current] + type.params // 提取URL
    }
    // 发起异步请求
    axios.get(url)
      .then(function (res) {
        state.latestJSON.comm = res.data // 存储返回的评论
        commit('imgLazyLoad') // 渲染可视界面的图片
      })
      .catch(function (err) {
        console.log(err)
      })
    console.log('getCommByArticle > url: ' + url)
  }
}
