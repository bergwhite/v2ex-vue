export default {
  api: {
    base: '',
    latest: '/api/topics/latest.json',
    hot: '/api/topics/hot.json',
    nodeAll: '/api/nodes/all.json',
    topic: '/api/topics/show.json?node_name=',
    user: '/api/topics/show.json?username=',
    comm: '/api/replies/show.json?topic_id=',
    article: '/api/topics/show.json?id='
  },
  apiState: {
    current: null,
    val: null,
    valComm: null
  }
}
