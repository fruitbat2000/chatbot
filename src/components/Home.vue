<template>
  <div class="home">
    <h2>Hi, how can we help?</h2>
    <p>Commonly asked questions:</p>
    <ul>
      <li v-for="(q, i) in commonlyAsked" :key="i">
        <a href="" @click.prevent="submitQuestion(q)">{{ q }}</a>
      </li>
    </ul>
    <p>Or... ask me something!</p>
    <input
      v-model="query"
      type="text"
      placeholder="type your question here..."
      @keyup.enter="submitQuestion(false)"
    />
    <v-btn 
      fab 
      small
      color="#750087" 
      @click="submitQuestion(false)">
      <v-icon color="#fff">
        mdi-magnify
      </v-icon>
    </v-btn>

    <a href="" class="button" @click.prevent="navigate('MentalHealthOptions')">
      Help! Everything is awful and I'm not OK!
    </a>
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
