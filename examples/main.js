import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import baseUi from '../packages'
Vue.config.productionTip = false
Vue.use(baseUi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
