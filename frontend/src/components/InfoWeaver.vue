<template>
  <div id="info">
    <v-layout column>
      <v-flex>
        <h1>위버 정보</h1>
        <h2>위버 이름 : 위버A</h2>
        <h2>위버 위치 : 대구 엑스코 35°54'28.3"N 128°36'45.7"E</h2>
        <p>
          <GmapMap
            :center="{lat: 35.907867, lng: 128.612694}"
            :zoom="18"
            style="width: 1280px; height: 560px"
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
      <v-flex>
        <h1>위버 기능</h1>
        <v-flex>
          <v-layout align-start justify-start row>
            <v-btn large @click.stop="adjustDryIceDropCycleDialog = true">드라이 아이스 투하 주기 설정</v-btn>
            <v-btn large @click.stop="adjustTrashCleaningCycleDialog = true">쓰레기청소 주기 설정</v-btn>

            <v-dialog v-model="adjustDryIceDropCycleDialog" max-width="740px">
              <v-card>
                <v-card-title>
                  <span class="headline">드라이 아이스 투하 주기 설정</span>
                </v-card-title>
                <v-card-text>
                  <v-select
                    :items="timesDI"
                    label="시간 주기를 선택하세요.."
                    item-value="text"
                  ></v-select>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" flat @click.stop="adjustDryIceDropCycleDialog=false">닫기</v-btn>
                  <v-btn color="primary" flat @click.stop="adjustDryIceDropCycleDialog=false">확인</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="adjustTrashCleaningCycleDialog" max-width="740px">
              <v-card>
                <v-card-title>
                  <span class="headline">쓰레기청소 주기 설정</span>
                </v-card-title>
                <v-card-text>
                  <v-select
                    :items="timesTC"
                    label="시간 주기를 선택하세요.."
                    item-value="text"
                  ></v-select>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" flat @click.stop="adjustTrashCleaningCycleDialog=false">닫기</v-btn>
                  <v-btn color="primary" flat @click.stop="adjustTrashCleaningCycleDialog=false">확인</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-flex>
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
  data: () => ({
    adjustDryIceDropCycleDialog: false,
    adjustTrashCleaningCycleDialog: false,
    timesDI: ["12시간", "18시간", "1일(권장)", "2일", "3일", "4일", "5일"],
    timesTC: ["1시간", "3시간(권장)", "5시간", "7시간"],

    center: {lat: 35.907867, lng: 128.612694},
    markers: [{
      position: {lat: 35.907867, lng: 128.612694}
    }, {
      position: {lat: 35.907867, lng: 128.612694}
    }]
  })
};
</script>

<style lang="scss" scoped>
#info {
  margin: 15px;

  h1 {
    font-weight: 800;
    margin-bottom: 5px;
  }

  p {
    margin: 10px 0 20px 0;
  }
}
</style>
