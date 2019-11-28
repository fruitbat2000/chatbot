<template>
  <section class="cbt__question">
    <v-skeleton-loader
      :loading="loading"
      type="list-item-avatar-three-line"
      class="cbt__question__loading"
    >
      <ul class="cbt__message__list">
        <li v-for="(msg, i) in messages" :key="i">
          <p>{{ msg }}</p>
        </li>
      </ul>

      <template v-if="question.type === 'slider'">
        <v-slider
          color="secondary"
          :max="question.sliderOptions.length"
          min="1"
          step="1"
          ticks
          v-model="sliderValue"
        >
        </v-slider>
        <v-btn rounded color="primary">{{
          question.sliderOptions[sliderValue - 1]
        }}</v-btn>
      </template>

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
    </v-skeleton-loader>
  </section>
</template>

<script>
import useExtractExpression from '../../use/useExtractExpression'
import { ref, watch, computed } from '@vue/composition-api'

export default {
  name: 'CbtQuestion',
  props: {
    question: Object,
    loading: Boolean,
    responses: Array
  },
  setup(props, context) {
    const selectedOption = ref(null)
    const store = context.root.$store
    const sliderValue = ref(2)

    const messages = computed(() => {
      return props.question.messages.map(msg =>
        useExtractExpression(msg, props.responses)
      )
    })

    watch(
      () => selectedOption.value,
      newVal => {
        if (newVal) {
          store.dispatch('cbt/fetchQuestion', newVal.nextQuestion)
          store.commit('cbt/updateResponses', newVal)
        }
      }
    )

    return { selectedOption, messages, sliderValue }
  }
}
</script>

<style scoped lang="scss">
.cbt__question {
  ul {
    list-style: none;
    padding: 0;
  }
}
</style>
