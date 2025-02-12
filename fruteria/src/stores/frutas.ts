import { defineStore } from 'pinia'

export const useFrutasStore = defineStore('frutas', {
  state: () => ({
    frutas: ['🍏 Manzana', ' 🍌 Plátano', '🟠 Naranja', 'Pera', 'Uva'],
    carrito: {} as Record<string, number> // Objeto con frutas y cantidades
  }),

  actions: {
    agregarAlCarrito(fruta: string) {
      if (this.carrito[fruta]) {
        this.carrito[fruta]++
      } else {
        this.carrito[fruta] = 1
      }
    },

    quitarDelCarrito(fruta: string) {
      if (this.carrito[fruta]) {
        this.carrito[fruta]--
        if (this.carrito[fruta] === 0) {
          delete this.carrito[fruta] 
        }
      }
    },

    vaciarCarrito() {
      this.carrito = {}
    }
  }
})
