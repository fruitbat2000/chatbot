<template>
  <div id="app">
    <component :is="currentView" />
  </div>
</template>

<script>
import Chatbot from './components/chatbot/Chatbot.vue'
import Home from './components/Home.vue'
import MentalHealthOptions from './components/MentalHealthOptions.vue'
import Cbt from './components/cbt/Cbt.vue'
import Breathe from './components/breathe/Breathe.vue'
import {reactive, computed, toRefs, ref} from '@vue/composition-api'
import {useState} from '@u3u/vue-hooks'

export default {
  name: 'App',
  components: {
    Home,
    Chatbot,
    MentalHealthOptions,
    Cbt,
    Breathe
  },
  setup(props, context) {
    const state = {
      ...useState(['currentView', 'chatbotOpen'])
    }

    return { ...state }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
