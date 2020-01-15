import Vue from 'vue'
import VueRouter from 'vue-router'
import fetch from 'isomorphic-fetch'

import {
  registerMicroApps,
  runAfterFirstMounted,
  setDefaultMountApp,
  start
} from 'qiankun'
import Framework from './App.vue'
import { config } from './config'

Vue.use(VueRouter)

let app = null
const router = new VueRouter({
  mode: 'history',
})

function render({ appContent, loading }) {
  if (!app) {
    app = new Vue({
      el: '#main',
      router,
      data() {
        return {
          content: appContent,
          loading
        }
      },
      render(h) {
        return h(Framework, {
          props: {
            content: this.content,
            loading: this.loading,
            config
          }
        })
      }
    })
  } else {
    app.content = appContent
    app.loading = false
  }
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix)
}

render({ loading: true })

const request = url =>
  fetch(url, {
    referrerPolicy: 'origin-when-cross-origin'
  })
const getAppList = config.map(v => {
  const { path } = v
  return {
    ...v,
    render,
    activeRule: genActiveRule(path),
    props: {
      token: 'token',
      routerBase: v.path,
      mainRouter: router,
    }
  }
})
registerMicroApps(
  getAppList,
  {
    beforeLoad: [
      app => {
        // console.log('before load', app)
      }
    ],
    beforeMount: [
      app => {
        // console.log('before mount', app)
      }
    ],
    afterUnmount: [
      app => {
        // console.log('after unload', app)
      }
    ]
  },
  {
    fetch: request
  }
)

// setDefaultMountApp(config[1].path)
runAfterFirstMounted(() => console.info('first app mounted'))

start({ fetch: request, prefetch: 'all' })
