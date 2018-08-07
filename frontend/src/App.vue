<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import WebFont from 'webfontloader'

export default {
  name: 'App',
  created () {
    WebFont.load({
      custom: {
        families: ['NanumSquareRound'],
        urls: ['https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css']
      }
    })
  }
}
</script>

<style lang="scss">
body {
  font-family: 'NanumSquareRound', sans-serif;
  font-weight: 400;
}
</style>
