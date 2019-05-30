import Vue from 'vue'
import Router from 'vue-router'
import Msite from "../pages/Msite/Msite"
import Order from "../pages/Order/Order"
import Profile from "../pages/Profile/Profile"
import Search from "../pages/Search/Search"
import Login from  '../pages/Login/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: '首页',
      component: Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      name: '菜单',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      name: '个人中心',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      name: '搜索',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/',
      redirect:"/msite"
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
  ]
})
