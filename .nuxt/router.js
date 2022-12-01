import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1fe9e56e = () => interopDefault(import('../pages/Emergency/addEmergency.vue' /* webpackChunkName: "pages/Emergency/addEmergency" */))
const _e63995d0 = () => interopDefault(import('../pages/Emergency/deleteEmergency.vue' /* webpackChunkName: "pages/Emergency/deleteEmergency" */))
const _6f605711 = () => interopDefault(import('../pages/Emergency/FinishedEmergency.vue' /* webpackChunkName: "pages/Emergency/FinishedEmergency" */))
const _3de5c64e = () => interopDefault(import('../pages/Emergency/getEmergency.vue' /* webpackChunkName: "pages/Emergency/getEmergency" */))
const _31dff269 = () => interopDefault(import('../pages/Emergency/modifyEmergency.vue' /* webpackChunkName: "pages/Emergency/modifyEmergency" */))
const _a85c5be4 = () => interopDefault(import('../pages/Volunteer/addVolunteer.vue' /* webpackChunkName: "pages/Volunteer/addVolunteer" */))
const _36dbc622 = () => interopDefault(import('../pages/Volunteer/affectedVolunteers.vue' /* webpackChunkName: "pages/Volunteer/affectedVolunteers" */))
const _dcaccbfe = () => interopDefault(import('../pages/Volunteer/analysis.vue' /* webpackChunkName: "pages/Volunteer/analysis" */))
const _17b08da8 = () => interopDefault(import('../pages/Volunteer/closeVolunteers.vue' /* webpackChunkName: "pages/Volunteer/closeVolunteers" */))
const _2857a562 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/Emergency/FinishedEmergency",
    component: _6f605711,
    name: "Emergency-FinishedEmergency"
  }, {
    path: "/Emergency/getEmergency",
    component: _3de5c64e,
    name: "Emergency-getEmergency"
  }, {
    path: "/Emergency/modifyEmergency",
    component: _31dff269,
    name: "Emergency-modifyEmergency"
  }, {
    path: "/Volunteer/addVolunteer",
    component: _a85c5be4,
    name: "Volunteer-addVolunteer"
  }, {
    path: "/Volunteer/affectedVolunteers",
    component: _36dbc622,
    name: "Volunteer-affectedVolunteers"
  }, {
    path: "/Volunteer/analysis",
    component: _dcaccbfe,
    name: "Volunteer-analysis"
  }, {
    path: "/Volunteer/closeVolunteers",
    component: _17b08da8,
    name: "Volunteer-closeVolunteers"
  }, {
    path: "/",
    component: _2857a562,
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
