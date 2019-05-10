import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Login from './views/Login.vue'

import Info from './views/Info.vue'
import FundList from './views/FundList.vue'



import Home from './views/Home.vue'
import Task from './views/Task.vue'
import AddMember from './views/AddMember.vue'
import MemberManage from './views/MemberManage.vue'
import GenAccount from './views/GenAccount.vue'
import GenCode from './views/GenCode.vue'
import GetCash from './views/GetCash.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: "/index",
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        { path: "", component: Home },
        { path: "/home", name: "home", component: Home },
        { path: "/task", component: Task },
        { path: "/addmember", component: AddMember },
        { path: "/menbermanage", component: MemberManage },
        { path: "/genaccount", component: GenAccount },
        { path: "/geninvitecode", component: GenCode },
        { path: "/getcash", component: GetCash }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("./views/Register.vue")
    },
    {
      path: '*',
      name: '404',
      component: () => import("./views/404.vue")
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})



//  路由守卫

// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.userToken ? true : false
//   if(to.path == "/login" || to.path == "/register"){
//     // 无论登录与否, 登录和注册页面是可以访问的
//     next()
//   }else{
//     // 如果登录了, 直接放过 next()
//     // 否则, 只能去 login, 如果没有注册, 可以通过登录页面去注册页面
//     isLogin ? next() : next("/login")
//   }
// })



export default router