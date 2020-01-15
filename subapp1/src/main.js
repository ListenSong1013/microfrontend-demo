/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import './public-path'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)

let router = null
let instance = null

export async function bootstrap() {
  // console.log('vue app bootstraped')
}

export async function mount(props) {
  console.log('app1 props from main framework', props)

  Vue.prototype.$mainRouter = props.mainRouter
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? props.routerBase : '/',
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app1')
}

export async function unmount() {
  instance.$destroy()
  instance = null
  router = null
}

window.APP_NAME = 'app1'
