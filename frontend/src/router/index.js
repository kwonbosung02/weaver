import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Main from '@/components/Main'
import SavingLife from '@/components/savingLife'
import Donate from '@/components/Donate'
import Purchase from '@/components/Purchase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/savinglife',
      name: 'savinglife',
      component: SavingLife
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: Purchase
    }
  ]
})
