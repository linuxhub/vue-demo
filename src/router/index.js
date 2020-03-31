import Vue from 'vue'            //引入Vue
import Router from 'vue-router'  //引入vue-router

import HelloWorld from '@/components/HelloWorld'  //引入根目录下的HelloWorld.vue组件
import LinuxHub from '@/components/LinuxHub'  //引入根目录下的Linuxhub.vue组件
 
Vue.use(Router)  //Vue全局使用Router

export default new Router({
  routes: [                  //配置路由，这里是个数组
    {                        //每一个链接都是一个对象
      path: '/',             //链接路径
      name: 'HelloWorld',    //路由名称
      component: HelloWorld  //对应的组件模板
    },
    // 配置 linuxHub 对象
    {
      path: '/linuxhub',
      name: 'LinuxHub',
      component: LinuxHub
    }
  ]
})
