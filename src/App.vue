<template>
  <div id="app">
    <component :is="currentView" />
  </div>
</template>

<script>
import Chatbot from './components/chatbot/Chatbot.vue'

export default {
  name: 'App',
  components: {
    Chatbot
  },
  data() {
    return {
      currentView: 'Chatbot'
    }
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
