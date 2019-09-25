import Vue from 'vue'
import Router from 'vue-router'
import Model from '@/components/Model.vue'
import Animate from '@/components/Animate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'model',
      component: Model
    },
    {
      path: '/animate',
      name: 'animate',
      component: Animate
    }
  ]
})
