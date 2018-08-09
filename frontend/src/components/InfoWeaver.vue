<template>
  <div id="info">
    <v-layout column>
      <v-flex>
        <h1>WEAVER 정보</h1>
        <h2>WEAVER 이름 : WEAVER-A</h2>
        <h2>WEAVER 위치 : 대구 엑스코 35°54'28.3"N 128°36'45.7"E</h2>
        <p>
          <GmapMap
            :center="{lat: 35.907867, lng: 128.612694}"
            :zoom="18"
            style="width: 1480px; height: 540px"
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
        <h1>WEAVER 기능</h1>
        <v-flex>
          <v-layout align-start justify-start row>
            <v-tooltip bottom>
              <v-btn slot="activator" large @click.stop="adjustCapsuleDropCycleDialog = true">캡슐 투하 주기 설정</v-btn>
              <span>캡슐을 자동으로 투하하기 위한 설정입니다.</span>
            </v-tooltip>
            <v-tooltip bottom>
              <v-btn slot="activator" large @click="smControl()">캡슐 투하</v-btn>
              <span>클릭 시 캡슐을 수동으로 투하합니다.</span>
            </v-tooltip>

            <v-dialog v-model="adjustCapsuleDropCycleDialog" max-width="740px">
              <v-card>
                <v-card-title>
                  <span class="headline">캡슐 투하 주기 설정</span>
                </v-card-title>
                <v-card-text>
                  <v-switch
                    :label="`캡슐 투하 : ${capsuleStatus.toString()}`"
                    v-model="capsuleStatus"
                    color="primary"
                  ></v-switch>
                  <v-select
                    :items="timesDI"
                    label="시간 주기를 설정해주세요.."
                    item-value="text"
                  ></v-select>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" flat @click.stop="adjustCapsuleDropCycleDialog=false">닫기</v-btn>
                  <v-btn color="primary" flat @click.stop="adjustCapsuleDropCycleDialog=false">저장</v-btn>
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
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDUWZHtbSEhi62wM6oZ5_C8j4LHTE0C9GI',
  authDomain: 'weaver-212606.firebaseapp.com',
  databaseURL: 'https://weaver-212606.firebaseio.com',
  projectId: 'weaver-212606',
  storageBucket: 'weaver-212606.appspot.com',
  messagingSenderId: '675639036437'
}
firebase.initializeApp(config)

var database = firebase.database()
var firebaseRef = firebase.database().ref("smStatus")
firebaseRef.set(0)

var smStatus

export default {
  name: "info",
  mounted () {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 35.907867, lng: 128.612694})
    })
  },
  data: () => ({
    adjustCapsuleDropCycleDialog: false,
    timesDI: ["12시간", "18시간", "1일(권장)", "2일", "3일", "4일", "5일"],

    center: {lat: 35.907867, lng: 128.612694},
    markers: [{
      position: {lat: 35.907867, lng: 128.612694}
    }, {
      position: {lat: 35.907867, lng: 128.612694}
    }],
    capsuleStatus: false
  }),
  methods: {
    smControl () {
      var millisec = 500;
      setTimeout(function() {
        if (smStatus == 1) {
          firebaseRef.set(0)
          smStatus = 0
        }
      }, millisec)
      firebaseRef.set(1)
      smStatus = 1
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

  p {
    margin: 10px 0 20px 0;
  }
}
</style>
