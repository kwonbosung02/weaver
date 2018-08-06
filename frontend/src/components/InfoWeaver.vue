<template>
  <div>
    <v-layout column>
      <v-flex>
        <h1>Weaver Info</h1>
        <h2>Weaver Name: </h2>
        <h2>Weaver Location: </h2>
      </v-flex>
      <v-flex>
        <h1>Weaver Functions</h1>
        <v-flex xs12 sm4>
          <div>
            <v-btn>Adjust Dry Ice Drop Cycle</v-btn>
          </div>
          <div>
            <v-btn>Adjust Trash Cleaning Cycle</v-btn>
          </div>
        </v-flex>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "info"
};
</script>

<style lang="scss" scoped>
</style>
