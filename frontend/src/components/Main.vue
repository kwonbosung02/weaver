<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >

      <v-list>
        <!--<v-list-tile>
          <v-layout row justify-center>
            <v-btn color="primary" dark large @click.stop="registerWeaverDialog = true">위버 등록</v-btn>
            <v-btn color="primary" dark large @click.stop="deleteWeaverDialog = true">위버 삭제</v-btn>

            <v-dialog v-model="registerWeaverDialog" max-width="740px">
              <v-card>
                <v-card-title>
                  <span class="headline">위버 등록</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-text-field label="위버 이름을 입력하세요.." required></v-text-field>
                      </v-flex>
                      <v-flex xs10>
                        <v-text-field label="위버 위치를 가져오세요.." hint="Press the btn"></v-text-field>
                      </v-flex>
                      <v-flex xs2>
                        <v-btn color="primary">GET</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" flat @click.stop="registerWeaverDialog=false">닫기</v-btn>
                  <v-btn color="primary" flat @click.stop="registerWeaverDialog=false">등록</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="deleteWeaverDialog" max-width="740px">
              <v-card>
                <v-card-title>
                  <span class="headline">위버 삭제</span>
                </v-card-title>
                <v-card-text>
                  <v-select
                    :items="items"
                    label="삭제할 위버를 선택하세요.."
                    item-value="text"
                  ></v-select>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" flat @click.stop="deleteWeaverDialog=false">닫기</v-btn>
                  <v-btn color="primary" flat @click.stop="deleteWeaverDialog=false">삭제</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-list-tile>-->

        <v-list-group class="marginTop">
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <v-icon>fa-bars</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              WEAVER 목록
            </v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            @click=""
          >
            <li>
              <v-list-tile-title v-text="item"></v-list-tile-title>
            </li>
          </v-list-tile>
        </v-list-group>

        <v-list-tile>
          <v-list-tile-action>
              <v-icon>fa-bars</v-icon>
            </v-list-tile-action>
          <v-list-tile-title>WEAVER 기능</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-flex column>
            <div class="marginTop2">
              <v-tooltip bottom>
                <v-btn slot="activator" @click.stop="adjustCapsuleDropCycleDialog = true">캡슐 투하 주기 설정</v-btn>
                <span>캡슐을 자동으로 투하하기 위한 설정입니다.</span>
              </v-tooltip>
            </div>
            <div>
              <v-tooltip bottom>
                <v-btn slot="activator" @click="smControl()">캡슐 투하</v-btn>
                <span>클릭 시 캡슐을 수동으로 투하합니다.</span>
              </v-tooltip>
            </div>
          </v-flex>

          <v-dialog v-model="adjustCapsuleDropCycleDialog" max-width="740px">
            <v-card>
              <v-card-title class="capsuleTitle">
                캡슐 투하 주기 설정
              </v-card-title>
              <v-card-text>
                <v-switch
                  :label="`캡슐 투하 : ${capsuleStatus.toString()}`"
                  v-model="capsuleStatus"
                  color="primary"
                ></v-switch>
                <v-select
                  v-model="capsuleControlArr"
                  :items="timesDI"
                  item-text="text"
                  item-value="millisec"
                  label="시간 주기를 설정해주세요.."
                  return-object
                ></v-select>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click.stop="adjustCapsuleDropCycleDialog=false">닫기</v-btn>
                <v-btn color="primary" flat @click="capsuleControl()">저장</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <span id="title" class="hidden-sm-and-down">WEAVER 관리자</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon size="18px">fa-info-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon size="18px">fa-cog</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <info-weaver></info-weaver>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import InfoWeaver from "@/components/InfoWeaver";
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

var smStatusRef = firebase.database().ref("smStatus")
smStatusRef.set(0)
var smStatus

var capsuleRef = firebase.database().ref("capsule")
capsuleRef.set(0)

export default {
  components: {
    InfoWeaver
  },
  data: () => ({
    drawer: null,
    adjustCapsuleDropCycleDialog: false,
    capsuleControlArr: {text: '1일(권장)', millisec: 86400000},
    timesDI: [
      {text: "테스트 5초", millisec: 5000},
      {text: "12시간", millisec: 43200000},
      {text: "18시간", millisec: 64800000},
      {text: "1일(권장)", millisec: 86400000},
      {text: "2일", millisec: 172800000},
      {text: "3일", millisec: 259200000}
    ],
    capsuleStatus: false,
    items: ["WEAVER-A"]
  }),
  props: {
    source: String
  },
  methods: {
    smControl () {
      var millisec = 500;
      setTimeout(function() {
        if (smStatus == 1) {
          smStatusRef.set(0)
          smStatus = 0
          alert('캡슐 투하를 완료하였습니다.')
        }
      }, millisec)
      smStatusRef.set(1)
      smStatus = 1
    },
    capsuleControl () {
      if (this.$data.capsuleStatus == true) {
        capsuleRef.set(this.$data.capsuleControlArr.millisec)
        alert('캡슐 자동 투하 시기 조정을 완료하였습니다.')
      } else {
        capsuleRef.set(0)
        alert('캡슐 자동 투하  기능을 종료하였습니다.')
      }
    }
  }
};
</script>

<style lang="scss">
#inspire {
  font-family: "NanumSquareRound", sans-serif;

  #title {
    font-weight: 700;
  }

  .marginTop {
    margin-top: 5px;
  }

  .marginTop2 {
    margin-top: 60px;
  }

  li {
    margin-left: 15px;
  }

  .capsuleTitle {
    font-size: 1.5rem;
  }
}
</style>
