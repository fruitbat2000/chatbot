<template>
  <div class="breathe">
    <template v-if="!breathing">
      <h2 class="primary--text">and... breathe</h2>
      <p>
        Focussing on your breathing is a great way to clear your mind and fight
        any physical symptoms of anxiety. The breathing exercise offered here is
        a version of a Kumbhaka practice used in Hatha Yoga - follow along with
        the count and allow your mind to empty of anything except the breath.
      </p>
      <v-btn rounded color="primary" @click="startLoop"
        >Start the practice</v-btn
      >
    </template>
    <template v-else>
      <section class="animation">
        <div class="breath" :class="stage"></div>
      </section>
      <section class="counter">
        <p class="secondary--text text--lighten-1">
          {{ stage }} ...
          <span
            :class="{ hidden: visibleCount <= 1 }"
            class="accent--text text--lighten-1"
            >{{ visibleCount }}</span
          >
        </p>
      </section>
    </template>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'Breathe',
  setup() {
    let stage = ref('')
    let visibleCount = ref(1)
    let breathing = ref(false)

    const startLoop = function() {
      breathing.value = true
      loop(stage, visibleCount)
    }

    return { startLoop, stage, visibleCount, breathing }
  }
}

function loop(stage, visibleCount) {
  let timer // eslint-disable-line
  let count = 0

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
</script>

<style scoped lang="scss">
.breathe {
  padding: 20px;
  position: relative;

  .animation {
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 100vw;

    .breath {
      background-color: lighten($accent, 30%);
      border-radius: 50%;
      height: 50px;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50px;

      &.inhale {
        height: calc(100vw - 40px);
        transition: all 4s linear;
        width: calc(100vw - 40px);
      }

      &.hold {
        height: calc(100vw - 40px);
        width: calc(100vw - 40px);
      }

      &.exhale {
        height: 50px;
        transition: all 7.5s linear;
        width: 50px;
      }
    }
  }

  .counter {
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%;

    p {
      font-size: 24px;
      text-align: center;

      span {
        display: inline-block;
        font-weight: bold;
        width: 30px;
      }

      .hidden {
        opacity: 0;
      }
    }
  }
}
</style>
