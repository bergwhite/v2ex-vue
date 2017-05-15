export default {
  // 返回最近的文章列表
  getApiVal (state) {
    return state.latestJSON.article
  },
  // 返回最近的评论列表
  getApiValComm (state) {
    return state.latestJSON.comm
  }
}
