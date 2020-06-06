import Vue from 'vue'
import VueRouter from 'vue-router'
import { setTitle } from '@/libs/util'
import routes from './routers'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(to => {
  setTitle(to, router.app)
  window.scrollTo(0, 0)
})

export default router
