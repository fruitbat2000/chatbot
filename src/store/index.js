import Vue from 'vue'
import Vuex from 'vuex'
import chatbot from './modules/chatbot'
import cbt from './modules/cbt'
import breathe from './modules/breathe'

Vue.use(Vuex)
const debug = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  state: {
    currentView: 'Home',
    chatbotOpen: false
  },
  mutations: {
    navigate(state, payload) {
      debug && console.log('navigate', state, payload)
      state.currentView = payload
    }
  },
  actions: {},
  modules: {
    cbt,
    chatbot,
    breathe
  }
})
