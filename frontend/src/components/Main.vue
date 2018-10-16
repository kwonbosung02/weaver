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
            <v-btn color="primary" dark large ripple @click.stop="registerWeaverDialog=true">위버 등록</v-btn>
            <v-btn color="primary" dark large ripple @click.stop="deleteWeaverDialog=true">위버 삭제</v-btn>

            <v-dialog v-model="registerWeaverDialog" max-width="740px">
              <v-card>
                <v-card-title>
                  <span class="headline">위버 등록</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-text-field label="위버 이름을 입력하세요." required></v-text-field>
                      </v-flex>
                      <v-flex xs10>
                        <v-text-field label="위버 위치를 가져오세요." hint="오른쪽 버튼을 눌러보세요"></v-text-field>
                      </v-flex>
                      <v-flex xs2>
                        <v-btn color="primary" ripple>GET</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" flat ripple @click.stop="registerWeaverDialog=false">닫기</v-btn>
                  <v-btn color="primary" flat ripple @click.stop="registerWeaverDialog=false">등록</v-btn>
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
                  <v-btn color="primary" flat ripple @click.stop="deleteWeaverDialog=false">닫기</v-btn>
                  <v-btn color="primary" flat ripple @click.stop="deleteWeaverDialog=false">삭제</v-btn>
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
            @click="item"
            ripple
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
                <v-btn ripple slot="activator" @click.stop="adjustCapsuleDropCycleDialog=true">캡슐 투하 주기 설정</v-btn>
                <span>캡슐을 자동으로 투하하기 위한 설정입니다.</span>
              </v-tooltip>
            </div>
            <div>
              <v-tooltip bottom>
                <v-btn ripple slot="activator" @click="smControl()">캡슐 투하</v-btn>
                <span>클릭 시 캡슐을 수동으로 투하합니다.</span>
              </v-tooltip>
            </div>
          </v-flex>

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
                <v-btn color="primary" flat ripple @click.stop="adjustCapsuleDropCycleDialog=false">닫기</v-btn>
                <v-btn color="primary" flat ripple @click="capsuleControl()">저장</v-btn>
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

      <v-layout row justify-end>
        <v-btn icon @click.stop="infoDialog=true"><v-icon size="18px">fa-info-circle</v-icon></v-btn>
        <v-btn icon @click.stop="settingDialog=true"><v-icon size="18px">fa-cog</v-icon></v-btn>

        <v-dialog v-model="infoDialog" max-width="740px">
          <v-card>
            <v-card-title>
              <span class="headline">WAEVER 가이드</span>
            </v-card-title>
            <v-card-text>
              WEAVER(이하 위버)는 바다 생태계를 파괴하는 백화현상을 막고, 없애, 산호가 다시 살 수 있는 환경을 조성하는 로봇입니다. 또한 해양 쓰레기를 청소하고, 인명피해를 줄이기 위한 인명구조의 역할을 수행합니다.<br>자세한 사항은 <a href="http://b.taevel.kr/posts/iroc_2018/" target="blank">여기</a>를 참고하세요.
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click.stop="infoDialog=false">닫기</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="settingDialog" max-width="740px">
          <v-card>
            <v-card-title>
              <span class="headline">WAEVER 설정</span>
            </v-card-title>
            <v-card-text>
              <v-switch
                :label="`인명구조 서비스 : ${savingLifeStatus.toString()}`"
                v-model="savingLifeStatus"
                color="primary"
              ></v-switch>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click.stop="settingDialog=false">닫기</v-btn>
              <v-btn color="primary" flat @click="settingControl()">저장</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
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

let database = firebase.database()

let smStatusRef = firebase.database().ref("smStatus")
smStatusRef.set(0)
let smStatus

let capsuleRef = firebase.database().ref("capsule")
capsuleRef.set(0)

let switchRef = firebase.database().ref("switch1")
switchRef.set(-1)

let check = 0
let lifeNum = 0

export default {
  components: {
    InfoWeaver
  },
  data: () => ({
    drawer: null,
    adjustCapsuleDropCycleDialog: false,
    registerWeaverDialog: false,
    deleteWeaverDialog: false,
    infoDialog: false,
    settingDialog: false,
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
    savingLifeStatus: false,
    items: ["WEAVER-A"]
  }),
  props: {
    source: String
  },
  methods: {
    smControl () {
      var millisec = 1000;
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
        alert('캡슐 자동 투하 기능을 종료하였습니다.')
      }
    },
    settingControl () {
      if (this.$data.savingLifeStatus == true) {
        switchRef.set(-1)
        switchRef.on('value', function() {
          if (check >= 1 && lifeNum <= 3) {
            lifeNum++
            if (confirm('총 ' + lifeNum + '명이 인명구조가 필요한 상황입니다!\n위치를 확인하세요!')) document.location.href = "#/savingLife"
            check++
          }
          check++
        })
      } else {
        switchRef.off()
        switchRef.set(-1)
        check = 0
        lifeNum = 0
        alert('인명구조 서비스를 종료하였습니다.')
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
