<template>
  <ul>
    <li v-for="(option, i) in options" :key="i" :class="option.type">
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

    watch(
      () => selectedOption.value,
      newVal => {
        if (newVal) {
          emit('optionSelected', selectedOption.value)
        }
      }
    )

    return { selectedOption }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
