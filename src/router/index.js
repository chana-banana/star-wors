import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import SearchView from '../views/SearchView.vue'
import DisplayView from '../views/DisplayView.vue'
import SuccessView from '../views/SuccessView.vue'
import CartView from '../views/CartView.vue'
import HistoryView from '../views/HistoryView.vue'

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
    path: '/display/:id',
    name: 'DisplayView',
    component: DisplayView,
    props: true
  },
  {
    path: '/success',
    name: 'SuccessView',
    component: SuccessView,
    meta: {isPublic: true}
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView,
  },
  {
    path: '/history',
    name: 'HistoryView',
    component: HistoryView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
