<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >

      <v-list>
        <v-list-tile>
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
                  <v-btn color="primary" flat @click.stop="deleteWeaverDialog=false">닫기</v-btn>
                  <v-btn color="primary" flat @click.stop="deleteWeaverDialog=false">삭제</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-list-tile>
      </v-list>

      <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            @click=""
          >
            <v-list-tile-title v-text="item"></v-list-tile-title>
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
        <span id="title" class="hidden-sm-and-down">WEAVER Management</span>
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

export default {
  components: {
    InfoWeaver
  },
  data: () => ({
    drawer: null,
    registerWeaverDialog: false,
    deleteWeaverDialog: false,
    adjustDryIceDropCycleDialog: false,
    adjustTrashCleaningCycleDialog: false,
    items: ["위버A", "위버B", "위버C", "위버D"]
  }),
  props: {
    source: String
  }
};
</script>

<style lang="scss">
#inspire {
  font-family: "NanumSquareRound", sans-serif;

  #title {
    font-weight: 700;
  }
}
</style>
