import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1fe9e56e = () => interopDefault(import('../pages/Emergency/addEmergency.vue' /* webpackChunkName: "pages/Emergency/addEmergency" */))
const _e63995d0 = () => interopDefault(import('../pages/Emergency/deleteEmergency.vue' /* webpackChunkName: "pages/Emergency/deleteEmergency" */))
const _3de5c64e = () => interopDefault(import('../pages/Emergency/getEmergency.vue' /* webpackChunkName: "pages/Emergency/getEmergency" */))
const _31dff269 = () => interopDefault(import('../pages/Emergency/modifyEmergency.vue' /* webpackChunkName: "pages/Emergency/modifyEmergency" */))
const _00c06111 = () => interopDefault(import('../pages/Emergency/mostrarEmergencias.vue' /* webpackChunkName: "pages/Emergency/mostrarEmergencias" */))
const _2857a562 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4bda4366 = () => interopDefault(import('../pages/_app.js' /* webpackChunkName: "pages/_app" */))

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
    component: _1fe9e56e,
    name: "Emergency-addEmergency"
  }, {
    path: "/Emergency/deleteEmergency",
    component: _e63995d0,
    name: "Emergency-deleteEmergency"
  }, {
    path: "/Emergency/getEmergency",
    component: _3de5c64e,
    name: "Emergency-getEmergency"
  }, {
    path: "/Emergency/modifyEmergency",
    component: _31dff269,
    name: "Emergency-modifyEmergency"
  }, {
    path: "/Emergency/mostrarEmergencias",
    component: _00c06111,
    name: "Emergency-mostrarEmergencias"
  }, {
    path: "/",
    component: _2857a562,
    name: "index"
  }, {
    path: "/:app",
    component: _4bda4366,
    name: "app"
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
