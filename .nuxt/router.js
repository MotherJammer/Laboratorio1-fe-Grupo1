import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c6a989c = () => interopDefault(import('..\\pages\\Emergency\\addEmergency.vue' /* webpackChunkName: "pages/Emergency/addEmergency" */))
const _54c69054 = () => interopDefault(import('..\\pages\\Emergency\\deleteEmergency.vue' /* webpackChunkName: "pages/Emergency/deleteEmergency" */))
const _aa2429c6 = () => interopDefault(import('..\\pages\\Emergency\\getEmergency.vue' /* webpackChunkName: "pages/Emergency/getEmergency" */))
const _0c7964b6 = () => interopDefault(import('..\\pages\\Emergency\\modifyEmergency.vue' /* webpackChunkName: "pages/Emergency/modifyEmergency" */))
const _33766c55 = () => interopDefault(import('..\\pages\\Emergency\\mostrarEmergencias.vue' /* webpackChunkName: "pages/Emergency/mostrarEmergencias" */))
const _21d8e1ba = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2c6a989c,
    name: "Emergency-addEmergency"
  }, {
    path: "/Emergency/deleteEmergency",
    component: _54c69054,
    name: "Emergency-deleteEmergency"
  }, {
    path: "/Emergency/getEmergency",
    component: _aa2429c6,
    name: "Emergency-getEmergency"
  }, {
    path: "/Emergency/modifyEmergency",
    component: _0c7964b6,
    name: "Emergency-modifyEmergency"
  }, {
    path: "/",
    component: _21d8e1ba,
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
