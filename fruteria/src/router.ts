import { createRouter, createWebHistory } from 'vue-router'
import FruitsView from "./views/FruitsView.vue"
import CartView from './views/CartView.vue'
import HomeView from './views/HomeView.vue'
// import AddFruitView from './views/AddFruitView.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/info-nutri', component: FruitsView },
    { path: '/carrito', component: CartView } 
  ]
})

export default router
