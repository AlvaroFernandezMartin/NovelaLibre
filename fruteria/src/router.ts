import { createRouter, createWebHistory } from 'vue-router'
import CartView from './views/CartView.vue'
import HomeView from './views/HomeView.vue'
import AddFruitView from './views/AddFruitView.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/agregar', component: AddFruitView },
    { path: '/carrito', component: CartView } // Nueva ruta
  ]
})

export default router
