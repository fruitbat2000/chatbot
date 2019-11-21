<template>
  <v-app id="app">
    <v-content>
      <component :is="currentView" />
    </v-content>
  </v-app>
</template>

<script>
import Chatbot from './components/chatbot/Chatbot.vue'
import Home from './components/Home.vue'
import MentalHealthOptions from './components/MentalHealthOptions.vue'
import Cbt from './components/cbt/Cbt.vue'
import Breathe from './components/breathe/Breathe.vue'
import { useState } from '@u3u/vue-hooks'

export default {
  name: 'App',
  components: {
    Home,
    Chatbot,
    MentalHealthOptions,
    Cbt,
    Breathe
  },
  setup() {
    const state = {
      ...useState(['currentView', 'chatbotOpen'])
    }

    return { ...state }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
