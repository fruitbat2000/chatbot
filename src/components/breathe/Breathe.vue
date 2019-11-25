<template>
  <div class="breathe">
    <h2 class="primary--text">And... Breathe</h2>
    <p v-if="!breathing">
      Focussing on your breathing is a great way to clear your mind and fight
      any physical symptoms of anxiety. The breathing exercise offered here is a
      version of a Kumbhaka practice used in Hatha Yoga - follow along with the
      count and allow your mind to empty of anything except the breath.
    </p>
    <v-btn v-if="!breathing" rounded color="primary" @click="startLoop"
      >Start the practice</v-btn
    >
    <p>
      {{ stage }} <span v-if="visibleCount > 1">{{ visibleCount }}</span>
    </p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'Breathe',
  setup() {
    let timer = false
    let stage = ref('')
    let count = 0
    let visibleCount = ref(1)
    let breathing = ref(false)

    const startLoop = function() {
      breathing.value = true

      timer = setInterval(() => {
        switch (count) {
          case 0:
            stage.value = 'inhale'
            visibleCount.value = 1
            count++
            break
          case 4:
            stage.value = 'hold'
            visibleCount.value = 1
            count++
            break
          case 8:
            stage.value = 'exhale'
            visibleCount.value = 1
            count++
            break
          case 16:
            count = 0
            stage.value = 'inhale'
            visibleCount.value = 1
            count++
            break
          default:
            count++
            visibleCount.value++
        }
      }, 1000)
    }

    return { startLoop, timer, stage, visibleCount, breathing }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.breathe {
  padding: 20px;
}
</style>
