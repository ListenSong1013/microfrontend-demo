/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import App from './App.vue'
import './public-path'

Vue.config.productionTip = false

let router = null
let instance = null

export async function bootstrap() {
  // console.log('vue app bootstraped')
}

export async function mount(props) {
  console.log('app2 props from main framework', props)

  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app2')
}

export async function unmount() {
  instance.$destroy()
  instance = null
  router = null
}

window.APP_NAME = 'app2'
