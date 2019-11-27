<template>
  <div class="cbt">
    <h2 class="primary--text">let's do this!</h2>
    <p>
      Together we can go through some simple exercises that will allow you to
      analyse your thinking and reframe your thoughts in a way that may make you
      feel more positive. These exercises are based on the principles of CBT
      (Cognitive Behavioural Therapy), which provides a practical framework for
      dealing with negative emotion. The more you do it, the more it becomes
      second nature so if you're interested, I suggest you check out a tool such
      as <a href="https://www.youper.ai/">Youper</a> to continue practicing on a
      regular basis.
    </p>
    <p>
      Before we start, I'd like to reassure you that none of the information you
      share within this part of the chatbot is stored and as soon as you refresh
      the page or close the chat window, your session will be deleted.
    </p>
    <v-btn color="primary" @click="startFlow" rounded>Let's get started</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Cbt',
  setup(props, context) {
    const store = context.root.$store

    function startFlow() {
      console.log('startFlow')
    }

    store.dispatch('cbt/fetchConfig').then(() => {
      store.dispatch('cbt/fetchQuestion', store.state.cbt.config.entryPoint)
    })

    return { startFlow }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cbt {
  padding: 20px;

  h2 {
    margin-bottom: 20px;
  }
}
</style>
