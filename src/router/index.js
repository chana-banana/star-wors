import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import SearchView from '../views/SearchView.vue'
import ResultsView from '../views/ResultsView.vue'

const routes = [
  {
    path: '/',
    name: 'SearchView',
    component: SearchView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
    {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/results',
    name: 'ResultsView',
    component: ResultsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
