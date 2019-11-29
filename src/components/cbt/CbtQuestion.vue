<template>
  <section class="cbt__question">
    <v-skeleton-loader
      :loading="loading"
      type="list-item-avatar-three-line"
      class="cbt__question__loading"
    >
      <ul class="cbt__question__message__list">
        <li v-for="(msg, i) in messages" :key="i">
          <v-card class="pa-3 mb-3" shaped flat>
            <p class="mb-0">{{ msg }}</p>
          </v-card>
        </li>
      </ul>
    </v-skeleton-loader>
    <div class="cbt__question__response">
      <template v-if="question.type === 'slider'">
        <v-slider
          color="secondary"
          :max="question.sliderOptions.length"
          min="1"
          step="1"
          ticks
          v-model="sliderValue"
        ></v-slider>
        <v-btn
          @click="submitResponse(question.sliderOptions[sliderValue - 1])"
          rounded
          color="primary"
        >{{ question.sliderOptions[sliderValue - 1].text }}</v-btn>
      </template>

      <option-list
        v-if="question.optionList"
        class="cbt__question__options"
        :options="question.optionList"
        @optionSelected="submitResponse"
      ></option-list>

      <v-textarea v-if="question.type === 'freeText'" v-model="freeText" loading no-resize>
        <template v-slot:progress>
          <v-progress-linear :value="freeTextProgress" absolute></v-progress-linear>
        </template>
        <template v-slot:append-outer>
          <v-btn
            fab
            color="secondary"
            small
            :disabled="freeTextProgress < 100"
            @click="submitResponse(question.submitObj)"
          >
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </template>
      </v-textarea>
    </div>
  </section>
</template>

<script>
import useExtractExpression from '../../use/useExtractExpression'
import OptionList from '../shared/OptionList.vue'
import { ref, computed } from '@vue/composition-api'

export default {
  name: 'CbtQuestion',
  props: {
    question: Object,
    loading: Boolean,
    responses: Array
  },
  components: {
    OptionList
  },
  setup(props, context) {
    const selectedOption = ref(null)
    const store = context.root.$store
    const sliderValue = ref(2)
    const freeText = ref('')

    const freeTextProgress = computed(() => {
      return (freeText.value.length / 60) * 100
    })

    const messages = computed(() => {
      return props.question.messages.map(msg =>
        useExtractExpression(msg, props.responses)
      )
    })

    function submitResponse(response) {
      store.dispatch('cbt/fetchQuestion', response.nextQuestion)
      store.commit('cbt/updateResponses', response)
    }

    return {
      selectedOption,
      messages,
      sliderValue,
      submitResponse,
      freeText,
      freeTextProgress
    }
  }
}
</script>

<style scoped lang="scss">
.cbt__question {
  background-color: $surface;
  height: 100vh;

  ul {
    list-style: none;
  }

  &__message__list {
    padding: 20px;

    li {
      max-width: 70vw;
    }
  }

  &__response {
    background-color: white;
    bottom: 0;
    left: 0;
    padding: 20px;
    position: fixed;
    width: 100vw;
  }
}
</style>
