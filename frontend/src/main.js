// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'font-awesome/css/font-awesome.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import * as VueGoogleMaps from 'vue2-google-maps'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBfG0fyWxT_0wX8W9248N9M0vjislygsQA',
    libraries: 'places'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
