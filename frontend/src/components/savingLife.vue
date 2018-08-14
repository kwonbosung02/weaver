<template>
  <div id="savinglife">
    <v-layout column>
      <v-flex>
        <h2>발견 시간 : {{ new Date().getHours() }}시 {{ new Date().getMinutes() }}분 {{ new Date().getSeconds() }}초</h2>
        <p>
          <GmapMap
            :center="{lat: 35.907867, lng: 128.612694}"
            :zoom="18"
            style="width: 2525px; height: 1020px"
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
  name: "savinglife",
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
#savinglife {
  margin: 15px;

  h2 {
    margin-bottom: 10px;
  }
}
</style>
