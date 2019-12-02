<template>
  <div class="chat-window">
    <div ref="history" class="chat-window__history">
      <slot name="history"></slot>
    </div>
    <div ref="interactive" class="chat-window__interactive">
      <slot name="interactive"></slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUpdated } from '@vue/composition-api'
export default {
  name: 'ChatWindow',
  setup() {
    const interactive = ref(null)
    const history = ref(null)

    function updateHeight() {
      const height = window.innerHeight - interactive.value.clientHeight + 20

      history.value.style.height = height + 'px'
      history.value.scrollTop = history.value.scrollHeight
    }

    onMounted(() => {
      updateHeight()
    })

    onUpdated(() => {
      updateHeight()
    })

    return { interactive, history }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chat-window {
  &__history {
    padding-bottom: 40px;
    overflow-y: scroll;
  }

  &__interactive {
    background-color: white;
    bottom: 0;
    left: 0;
    padding: 20px;
    position: fixed;
    width: 100vw;
  }
}
</style>
