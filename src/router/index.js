import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import clientManage from '@/views/clientManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/add',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/client',
      name: 'clientManage',
      component: clientManage
    }
  ]
})
