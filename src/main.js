import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Layout, Avatar } from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Layout)
Vue.use(Avatar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
