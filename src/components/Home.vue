<template>
  <div class="home">
    <section class="home__content">
      <h2 class="primary--text">Hi, how can I help?</h2>
      <p>
        I'm a chatbot and I'll do my best to answer your questions, but if I
        can't you can still contact a real person using the contact info here.
        If you're in any immediate danger, please call the police!
      </p>
      <h3>Commonly asked questions:</h3>
      <ul>
        <li v-for="(q, i) in commonlyAsked" :key="i">
          <a href @click.prevent="submitQuestion(q)">{{ q }}</a>
        </li>
      </ul>
    </section>
    <footer class="primary">
      <v-text-field
        v-model="query"
        label="Or ask me something!"
        color="warning"
        filled
        dark
        type="text"
        placeholder="type your question here..."
        append-icon="mdi-send"
        @keyup.enter="submitQuestion(false)"
        @click:append="submitQuestion(false)"
      />

      <help-bar></help-bar>
    </footer>
  </div>
</template>

<script>
import HelpBar from './shared/HelpBar.vue'
import { ref } from '@vue/composition-api'

export default {
  name: 'Home',
  components: {
    HelpBar
  },
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
<style scoped lang="scss">
.home {
  height: 100vh;

  &__content {
    padding: 20px;
  }

  h2 {
    margin-bottom: 20px;
  }

  h3 {
    margin: 30px 0 5px;
  }

  ul {
    background-color: $lightGrey;
    list-style: none;
    padding: 20px;

    li {
      margin-bottom: 5px;
    }
  }

  footer {
    bottom: 0;
    padding: 10px;
    position: fixed;
    width: 100vw;
  }
}
</style>
