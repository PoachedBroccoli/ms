import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Home.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
    meta: {
      title: 'Chat | Chat'
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    meta: {
      title: 'Chat | Enter something'
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/Chat.vue'),
    meta: {
      title: 'Chat | Enter something'
    }
  },
  {
    path: '*',
    name: '/',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path === '/chat' && store.state.auth.nickname) {
    next()
  } else {
    if (to.path === '/') {
      next()
    } else if (to.path === '/auth') {
      next()
    } else {
      next({ path: '/' })
    }
  }
})

export default router
