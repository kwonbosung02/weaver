<template>
  <div class="index">
    <v-flex :key="`6${i}`" xs6>
      <h1>WEAVER</h1>
      <p>Lorem magna non officia aliqua. Enim Lorem labore minim duis. Enim pariatur et tempor est nisi aute dolore consectetur adipisicing cupidatat dolor amet minim. Veniam dolore eiusmod proident non. Voluptate laboris enim et ut sit in ipsum non minim non ad. Est veniam excepteur minim nisi anim proident laboris culpa tempor laboris mollit. Anim duis do id ex ut aliquip magna occaecat eu excepteur.</p>
    </v-flex>
    <div class="buttons">
      <v-btn v-on:click="moveMain()">START WEAVER</v-btn>
      <v-btn v-on:click="moveDonate()">DONATE</v-btn>
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
.index {
  margin: 60px;

  h1 {
    font-weight: normal;
    margin-bottom: 1rem;
  }
}
</style>
