import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'
import { Layout, Avatar, Button, Input, Checkbox, Form } from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(VueParticles)
Vue.use(Layout)
Vue.use(Avatar)
Vue.use(Button)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Form)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
