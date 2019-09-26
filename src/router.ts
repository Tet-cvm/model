import Vue from 'vue'
import Router from 'vue-router'
import Model from '@/components/Model.vue'
import Rotate from '@/components/Rotate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/model',
      name: 'model',
      component: Model
    },
    {
      path: '/rotate',
      name: 'rotate',
      component: Rotate
    }
  ]
})
