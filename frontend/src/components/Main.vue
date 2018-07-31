<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-group
          no-action
          sub-group
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Check Weaver Location</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            @click=""
          >
            <v-list-tile-title v-text="item"></v-list-tile-title>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Functional Management</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(manage, i) in manages"
            :key="i"
            @click=""
          >
            <v-list-tile-title v-text="manage"></v-list-tile-title>
          </v-list-tile>
        </v-list-group>
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
        <span class="hidden-sm-and-down">WEAVER Management</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="fa-search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon size="18px">fa-shopping-cart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon size="18px">fa-info-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon size="18px">fa-question-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon size="18px">fa-comment</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon size="18px">fa-cog</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <main-map></main-map>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MainMap from '@/components/MainMap'

export default {
  components: {
    MainMap
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      'Weaver-A',
      'Weaver-B',
      'Weaver-C',
      'Weaver-D'
    ],
    manages: [
      'Modify Path',
      'Adjust Dry Ice Drop Cycle',
      'Adjust Trash Cleaning Cycle'
    ]
  }),
  props: {
    source: String
  }
}
</script>
