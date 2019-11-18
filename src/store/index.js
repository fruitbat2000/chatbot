import Vue from 'vue'
import Vuex from 'vuex'
import chatbot from './modules/chatbot'
import cbt from './modules/cbt'
import breathe from './modules/breathe'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentView: 'chatbot'
  },
  mutations: {},
  actions: {},
  modules: {
    cbt,
    chatbot,
    breathe
  }
})
