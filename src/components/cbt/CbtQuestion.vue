<template>
  <div class="cbt__question">
    <div v-if="loading" class="cbt__question__loading">Loading</div>
    <h2 class="primary--text">{{ question.text }}</h2>
    <p>{{ question.subtext }}</p>
    <ul v-if="question.optionList" class="cbt__question__answers">
      <li
        v-for="(option, i) in question.optionList"
        :key="i"
        :class="option.type"
      >
        <label :for="`input-${option.type}-${i}`">
          <input
            type="radio"
            :id="`input-${option.type}-${i}`"
            v-model="selectedOption"
            :value="option"
          />
          {{ option.text }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api'

export default {
  name: 'CbtQuestion',
  props: {
    question: Object,
    loading: Boolean
  },
  setup(props, context) {
    const selectedOption = ref('')
    const store = context.root.$store

    watch(
      () => selectedOption.value,
      newVal => {
        console.log(newVal)
        if (newVal.nextQuestion) {
          store.dispatch('cbt/fetchQuestion', newVal.nextQuestion)
        }
      }
    )

    return { selectedOption }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
