import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(VueRouter)
Vue.use(ElementUI)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
]

const router = new VueRouter({
  routes
})

export default router
