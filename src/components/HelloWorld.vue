<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      required: true,
      type: String,
      default: 'Hi Vicki'
    }
  },
  mounted() {
    console.log(process.env.NODE_ENV);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
