import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import SearchView from '../views/SearchView.vue'
import DisplayView from '../views/DisplayView.vue'
import SuccessView from '../views/SuccessView.vue'
import CartView from '../views/CartView.vue'
import HistoryView from '../views/HistoryView.vue'
import OrderView from '../views/OrderView.vue'

const routes = [
  {
    path: '/',
    name: 'SearchView',
    component: SearchView,
    meta: {isPublic: false}
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
    meta: {isPublic: false},
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
    meta: {isPublic: false}
  },
  {
    path: '/history',
    name: 'HistoryView',
    component: HistoryView,
    meta: {isPublic: false},
    props: true
  },
  {
    path: '/order/:id',
    name: 'OrderView',
    component: OrderView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('key-anuReeves');
    if(token || to.meta.isPublic) {
      next()
    } else {
      next('/login');
    }
});

export default router
