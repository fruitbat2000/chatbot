import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import hooks from '@u3u/vue-hooks'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.use(hooks)
Vue.use(VueCompositionApi)
Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
