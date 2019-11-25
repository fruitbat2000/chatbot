<template>
  <div class="mental-health-options">
    <h1>Mental Health Landing</h1>
    <nav>
      <ul>
        <li>
          <a href="" @click.prevent="navigate('Cbt')"
            >Help me process my emotions</a
          >
        </li>
        <li>
          <a href="" @click.prevent="navigate('Breathe')"
            >Let's just breathe together</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MentalHealthOptions',
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
<style scoped lang="scss"></style>
