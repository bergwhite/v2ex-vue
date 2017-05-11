import axios from 'axios'

export default {
  getTopic ({commit, state}, argvs) {
    let url = null
    if (argvs === undefined) {
      state.apiState.current = 'latest'
      url = state.api[state.apiState.current]
    } else if (argvs === 'latest' || argvs === 'hot') {
      state.apiState.current = argvs
      url = state.api[state.apiState.current]
    } else if (argvs === 'nodeAll') {
      state.apiState.current = argvs
      url = state.api[state.apiState.current]
    } else {
      state.apiState.current = 'node'
      url = state.api[state.apiState.current] + argvs
    }
    console.log(url)
    axios.get(url)
      .then(function (res) {
        state.apiState.val = res.data
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
