const debug = process.env.NODE_ENV === 'development'

const state = {
  config: null
}
const getters = {}
const actions = {
  fetchConfig({ commit, rootState }) {
    const config = rootState.db.collection('cbtConfig')

    config.get().then(arr => {
      commit('setConfig', arr.docs[0].data().config)
    })
  }
}
const mutations = {
  setConfig(state, payload) {
    debug && console.log('setConfig', state, payload)
    state.config = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
