<template>
  <div class="index">
    <div class="container">
      <h1>WEAVER</h1>
      <h3>Proident labore do qui duis aliquip quis. Sint voluptate deserunt excepteur enim fugiat esse sit laborum officia nostrud. Quis reprehenderit irure officia sunt. Id reprehenderit esse laboris fugiat deserunt nulla. Non officia esse reprehenderit aliqua sunt occaecat tempor commodo nisi cupidatat sunt.</h3>
    </div>
    <div class="buttons">
      <button v-on:click="moveMain()">START WEAVER</button>
      <button v-on:click="moveDonate()">DONATE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    moveMain () {
      this.$router.push('/main')
    },
    moveDonate () {
      this.$router.push('/donate')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 50%;

  h1, h3 {
    font-weight: normal;
  }
}
</style>
