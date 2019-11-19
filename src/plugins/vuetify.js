import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#750087',
        secondary: '#ff6600',
        error: '#ff0000',
        accent: '#5cb85c',
        warning: '#ffc107'
      }
    }
  }
})
