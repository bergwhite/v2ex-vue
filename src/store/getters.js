export default {
  getApiState (state) {
    return state.api[state.apiState.current]
  },
  getApiVal (state) {
    return state.apiState.val
  }
}
