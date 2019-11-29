<template>
  <ul class="option-list">
    <li
      v-for="(option, i) in options"
      :key="i"
      :class="[option.type === 'mood' ? option.text : '', option.type]"
    >
      <v-chip :color="setColor(option)">
        <label :for="`input-${option.type}-${i}`">
          <input
            type="radio"
            :id="`input-${option.type}-${i}`"
            v-model="selectedOption"
            :value="option"
          />
          {{ option.text }}
        </label>
      </v-chip>
    </li>
  </ul>
</template>

<script>
import { ref, watch } from '@vue/composition-api'

export default {
  name: 'OptionList',
  props: {
    options: Array
  },
  setup(props, { emit }) {
    const selectedOption = ref(null)

    function setColor(option) {
      switch (option.text) {
        case 'angry':
        case 'frustrated':
        case 'overwhelmed':
        case 'stressed':
        case 'annoyed':
          return 'error darken-2'
          break
        case 'insecure':
        case 'anxious':
        case 'afraid':
        case 'sad':
        case 'ashamed':
        case 'depressed':
          return 'primary'
          break
        case 'okay':
        case 'numb':
        case 'tired':
          return '#dcdcdc'
          break
        case 'calm':
        case 'optimistic':
        case 'happy':
          return 'warning'
          break
        default:
          return 'secondary'
      }
    }

    watch(
      () => selectedOption.value,
      newVal => {
        if (newVal) {
          emit('optionSelected', selectedOption.value)
        }
      }
    )

    return { selectedOption, setColor }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.option-list {
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  padding: 0;

  li {
    position: relative;
    margin: 0 10px 10px 0;
  }

  input[type='radio'] {
    position: absolute;
    visibility: hidden;
  }
}
</style>
