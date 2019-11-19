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
    chatbotOpen: false,
    commonlyAsked: [
      'Can you find me a place to stay?',
      "Should I tell my family that I'm LGBTQ+?",
      'How do I become an akt volunteer?',
      'How do I access mentoring services',
      'Where does my donation go?'
    ]
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
