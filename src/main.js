import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import hooks from '@u3u/vue-hooks'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyCHNgYSTv4Zv9Rjpsx05in-1s6La9WQOak',
  authDomain: 'charitybot-260314.firebaseapp.com',
  databaseURL: 'https://charitybot-260314.firebaseio.com',
  projectId: 'charitybot-260314',
  storageBucket: 'charitybot-260314.appspot.com',
  messagingSenderId: '983674102161',
  appId: '1:983674102161:web:633eaf53289143595efa30'
}

firebase.initializeApp(config)

const db = firebase.firestore()

db.enablePersistence().catch(function(err) {
  if (err.code == 'failed-precondition') {
    console.log(err.code)
  } else if (err.code == 'unimplemented') {
    console.log(err.code)
  }
})

store.commit('setDbInstance', db)

Vue.use(hooks)
Vue.use(VueCompositionApi)
Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
