<template>
  <div class="home">
    <h1>Home</h1>
    <nav>
      <ul>
        <li><a href="" @click.prevent="navigate('Chatbot')">Ask me a question</a></li>
        <li><a href="" @click.prevent="navigate('MentalHealthOptions')">Everything is awful and I'm not OK</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup(props, context) {
    const store = context.root.$store;

    function navigate(destination) {
      store.commit('navigate', destination)
    }

    return { navigate }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
