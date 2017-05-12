export default {
  getApiState (state) {
    return state.api[state.apiState.current]
  },
  getApiVal (state) {
    return state.apiState.val
  },
  getApiValComm (state) {
    return state.apiState.valComm
  }
}
