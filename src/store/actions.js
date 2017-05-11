import axios from 'axios'

export default {
  getJSON ({commit, state}, argvs) {
    state.apiState.current = argvs
    axios.get(state.api[state.apiState.current])
      .then(function (res) {
        state.apiState.val = res.data
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
