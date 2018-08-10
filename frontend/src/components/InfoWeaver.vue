<template>
  <div id="info">
    <v-layout column>
      <v-flex>
        <h1>WEAVER 정보</h1>
        <h2>WEAVER 이름 : WEAVER-A</h2>
        <h2 class="lastH2">WEAVER 위치 : 대구 엑스코 35°54'28.3"N 128°36'45.7"E</h2>
        <p>
          <GmapMap
            :center="{lat: 35.907867, lng: 128.612694}"
            :zoom="18"
            style="width: 2150px; height: 780px"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            />
          </GmapMap>
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "info",
  mounted () {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 35.907867, lng: 128.612694})
    })
  },
  data () {
    return {
      center: {lat: 35.907867, lng: 128.612694},
      markers: [{
        position: {lat: 35.907867, lng: 128.612694}
      }, {
        position: {lat: 35.907867, lng: 128.612694}
      }]
    }
  }
};
</script>

<style lang="scss" scoped>
#info {
  margin: 15px;

  h1 {
    font-weight: 800;
    margin-bottom: 5px;
  }

  .lastH2 {
    margin-bottom: 20px;
  }

  p {
    margin: 10px 0 20px 0;
  }
}
</style>
