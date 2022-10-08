import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _75d4b31e = () => interopDefault(import('..\\pages\\Emergency\\addEmergency.vue' /* webpackChunkName: "pages/Emergency/addEmergency" */))
const _578d6d30 = () => interopDefault(import('..\\pages\\Emergency\\deleteEmergency.vue' /* webpackChunkName: "pages/Emergency/deleteEmergency" */))
const _36f7ea89 = () => interopDefault(import('..\\pages\\Emergency\\getEmergency.vue' /* webpackChunkName: "pages/Emergency/getEmergency" */))
const _793606b9 = () => interopDefault(import('..\\pages\\Emergency\\modifyEmergency.vue' /* webpackChunkName: "pages/Emergency/modifyEmergency" */))
const _7ae62ac1 = () => interopDefault(import('..\\pages\\Emergency\\mostrarEmergencias.vue' /* webpackChunkName: "pages/Emergency/mostrarEmergencias" */))
const _0d48d18f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Emergency/addEmergency",
    component: _75d4b31e,
    name: "Emergency-addEmergency"
  }, {
    path: "/Emergency/deleteEmergency",
    component: _578d6d30,
    name: "Emergency-deleteEmergency"
  }, {
    path: "/Emergency/getEmergency",
    component: _36f7ea89,
    name: "Emergency-getEmergency"
  }, {
    path: "/Emergency/modifyEmergency",
    component: _793606b9,
    name: "Emergency-modifyEmergency"
  }, {
    path: "/Emergency/mostrarEmergencias",
    component: _7ae62ac1,
    name: "Emergency-mostrarEmergencias"
  }, {
    path: "/",
    component: _0d48d18f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
