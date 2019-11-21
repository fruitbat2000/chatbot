<template>
  <div class="help-bar">
    <v-btn
      color="secondary"
      ripple
      href
      rounded
      @click.prevent="navigate('MentalHealthOptions')"
    >
      Help!
    </v-btn>
    <span class="white--text">Everything is awful and I'm not OK!</span>
  </div>
</template>

<script>
export default {
  name: 'HelpBar',
  setup(props, context) {
    const store = context.root.$store

    function navigate(destination) {
      store.commit('navigate', destination)
    }

    return { navigate }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.help-bar {
  button {
    margin-right: 10px;
  }
}
</style>
