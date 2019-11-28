<template>
  <div class="cbt__question">
    <div v-if="loading" class="cbt__question__loading">Loading</div>
    <ul class="cbt__message__list">
      <li v-for="(msg, i) in messages" :key="i">
        <p>{{ msg }}</p>
      </li>
    </ul>
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

    const messages = computed(() => {
      return props.question.messages.map(msg =>
        extractExpression(msg, props.responses)
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

    return { selectedOption, messages }
  }
}

function extractExpression(str, responses) {
  if (!str) {
    return
  }

  const regex = /{.*?}/g
  const matches = str.match(regex)

  for (var m in matches) {
    const prop = matches[m].replace(/[{}]/g, '')
    let expr = responses.filter(obj => obj.type === prop)
    expr = expr[0].text

    str = str.replace(matches[m], expr)
  }

  return str
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
