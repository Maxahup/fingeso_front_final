import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'main',

    component: () => import('../views/MainView.vue')
  },
  {
    path: '/upload-view',
    name: 'upload-view',

    component: () => import('../views/UploadComplaintView.vue')
  },
  {
    path: '/users-complaints-view',
    name: 'users-complaints-view',

    component: () => import('../views/UserComplaintsView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
