import Vue from 'vue'
import VueRouter from 'vue-router'
import { setTitle, getToken, setToken } from '@/libs/util'
import routes from './routers'
import store from '@/store'
import config from '@/config'
const { homeName } = config

Vue.use(VueRouter)

const LOGIN_PAGE_NAME = 'login'

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({ name: homeName }) // 跳转到homeName页
  } else if (!token) {
    // 未登录
    next()
  } else {
    if (store.state.user.hasGetInfo) {
      next() // 已获取用户信息，直接跳转
    } else {
      store.dispatch('getUserInfo').then(res => {
        next()
      }).catch(() => {
        setToken('')
        next({ name: LOGIN_PAGE_NAME }) // 跳转到登录页
      })
    }
  }
})

router.afterEach(to => {
  setTitle(to, router.app)
  window.scrollTo(0, 0)
})

export default router
