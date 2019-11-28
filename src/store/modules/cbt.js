const debug = process.env.NODE_ENV === 'development'

const state = {
  config: null,
  currentQuestion: {},
  dbError: false,
  questionLoading: true,
  responses: []
}
const getters = {}
const actions = {
  fetchConfig({ commit, rootState }) {
    const config = rootState.db.collection('cbtConfig')

    return new Promise((resolve, reject) => {
      config
        .get()
        .then(arr => {
          commit('setConfig', arr.docs[0].data().config)
          resolve()
        })
        .catch(() => {
          commit('setDbError', true)
          reject()
        })
    })
  },
  fetchQuestion({ commit, rootState }, payload) {
    const docRef = rootState.db.collection('cbtQuestions').doc(payload)
    commit('setLoading', true)

    docRef
      .get()
      .then(doc => {
        commit('setCurrentQuestion', doc.data())
        commit('setLoading', false)
      })
      .catch(err => {
        console.log(err)
        commit('setDbError', true)
      })
  }
}
const mutations = {
  setConfig(state, payload) {
    debug && console.log('setConfig', state, payload)
    state.config = payload
  },
  setCurrentQuestion(state, payload) {
    debug && console.log('setCurrentQuestion', state, payload)
    state.currentQuestion = payload
  },
  setDbError(state, payload) {
    debug && console.log('setDbError', state, payload)
    state.dbError = payload
  },
  setLoading(state, payload) {
    debug && console.log('setLoading', state, payload)
    state.questionLoading = payload
  },
  updateResponses(state, payload) {
    debug && console.log('updateResponses', state, payload)
    state.responses.push(payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
