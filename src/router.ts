import Vue from 'vue'
import Router from 'vue-router'
import Model from '@/components/Model.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'model',
      component: Model
    }
  ]
})
