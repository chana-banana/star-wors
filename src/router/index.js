import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import SearchView from '../views/SearchView.vue'
import DisplayView from '../views/DisplayView.vue'

const routes = [
  {
    path: '/',
    name: 'SearchView',
    component: SearchView,
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
    meta: {isPublic: true}
  },
    {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView,
    meta: {isPublic: true}
  },
  {
    path: '/display',
    name: 'DisplayView',
    component: DisplayView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
