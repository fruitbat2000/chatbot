<template>
  <div class="home">
    <h2>Hi, how can we help?</h2>
    <p>Commonly asked questions:</p>
    <ul>
      <li v-for="(q, i) in commonlyAsked" :key="i">
        <a href @click.prevent="submitQuestion(q)">{{ q }}</a>
      </li>
    </ul>
    <v-text-field
      v-model="query"
      label="Or ask me something!"
      color="secondary"
      outlined
      type="text"
      placeholder="type your question here..."
      append-icon="mdi-send"
      @keyup.enter="submitQuestion(false)"
      @click:append="submitQuestion(false)"
    />

    <v-btn
      color="primary"
      ripple
      href
      rounded
      @click.prevent="navigate('MentalHealthOptions')"
    >
      Help!
    </v-btn>
    <span class="secondary--text">Everything is awful and I'm not OK!</span>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'Home',
  setup(props, context) {
    const store = context.root.$store
    const query = ref('')
    const commonlyAsked = ref(store.state.commonlyAsked)

    function navigate(destination) {
      store.commit('navigate', destination)
    }

    function submitQuestion(q) {
      const question = q ? q : query.value
      console.log(question)
    }

    return { navigate, query, submitQuestion, commonlyAsked }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
