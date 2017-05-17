export default {
  // api请求类型
  api: {
    latest: '/api/topics/latest.json',  // 最新
    hot: '/api/topics/hot.json',  // 热门
    nodeAll: '/api/nodes/all.json',  // 所有节点
    topic: '/api/topics/show.json?node_name=',  // 指定主题
    user: '/api/topics/show.json?username=',  // 指定用户
    comm: '/api/replies/show.json?topic_id=',  // 指定文章的评论
    article: '/api/topics/show.json?id='  // 指定的文章
  },
  // 最近一次请求返回的文章和评论都存储在这里
  latestJSON: {
    current: null,  // 最近一次请求的api类型
    article: null,
    comm: null
  },
  articleLoadState: {
    default: 'loading...(长时间未显示请刷新，API限制单IP每小时120次请求)',
    current: 'loading...(长时间未显示请刷新，API限制单IP每小时120次请求)'
  },
  remainRequest: null
}
