<template>
  <div class="cbt">
    <section v-if="intro" class="cbt__intro">
      <h2 class="primary--text">let's do this!</h2>
      <p>
        Together we can go through some simple exercises that will allow you to
        analyse your thinking and reframe your thoughts in a way that may make
        you feel more positive. These exercises are based on the principles of
        CBT (Cognitive Behavioural Therapy), which provides a practical
        framework for dealing with negative emotion. The more you do it, the
        more it becomes second nature so if you're interested, I suggest you
        check out a tool such as
        <a href="https://www.youper.ai/">Youper</a> to continue practicing on a
        regular basis.
      </p>
      <p>
        Before we start, I'd like to reassure you that none of the information
        you share within this part of the chatbot is stored and as soon as you
        refresh the page or close the chat window, your session will be deleted.
      </p>
      <v-btn color="primary" @click="startFlow" rounded
        >Let's get started</v-btn
      >
    </section>
    <cbt-question
      v-else
      :question="currentQuestion"
      :loading="questionLoading"
      :responses="responses"
    />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { useState } from '@u3u/vue-hooks'
import CbtQuestion from './CbtQuestion.vue'

export default {
  name: 'Cbt',
  components: {
    CbtQuestion
  },
  setup(props, context) {
    const store = context.root.$store
    let intro = ref(true)
    let state = {
      ...useState('cbt', ['currentQuestion', 'questionLoading', 'responses'])
    }

    function startFlow() {
      // looks like this may not need to exist
      console.log('startFlow', state)
      intro.value = false
    }

    store.dispatch('cbt/fetchConfig').then(() => {
      store.dispatch('cbt/fetchQuestion', store.state.cbt.config.entryPoint)
    })

    return { startFlow, ...state, intro }
  }
}
</script>

<style scoped lang="scss">
.cbt {
  &__intro {
    padding: 20px;
  }

  h2 {
    margin-bottom: 20px;
  }
}
</style>
