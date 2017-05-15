import axios from 'axios'

export default {
  getTopic ({commit, state}, type) {
    state.apiState.valComm = null
    state.apiState.val = null
    let url = null
    if (type === undefined) {
      state.apiState.current = 'latest'
      url = state.api[state.apiState.current]
    } else {
      state.apiState.current = type
      url = state.api[state.apiState.current]
    }
    axios.get(url)
      .then(function (res) {
        state.apiState.val = res.data
        commit('lazyLoadImg')
      })
      .catch(function (err) {
        console.log(err)
      })
    console.log(url)
  },
  getTopicByParams ({commit, state}, type) {
    state.apiState.val = null
    let url = null
    console.log('type: ' + type.name)
    console.log('params: ' + type.params)
    if (type.name !== undefined && type.params !== undefined) {
      type.name = type.name.toLowerCase()
      state.apiState.current = type.name
      url = state.api[state.apiState.current] + type.params
    }
    axios.get(url)
      .then(function (res) {
        state.apiState.val = res.data
        commit('lazyLoadImg')
      })
      .catch(function (err) {
        console.log(err)
      })
    console.log(url)
  },
  getCommByArticle ({commit, state}, type) {
    state.apiState.valComm = null
    let url = null
    console.log('type: ' + type.name)
    console.log('params: ' + type.params)
    if (type.name !== undefined && type.params !== undefined) {
      type.name = type.name.toLowerCase()
      state.apiState.current = type.name
      url = state.api[state.apiState.current] + type.params
    }
    axios.get(url)
      .then(function (res) {
        state.apiState.valComm = res.data
        commit('lazyLoadImg')
      })
      .catch(function (err) {
        console.log(err)
      })
    console.log(url)
  }
}
