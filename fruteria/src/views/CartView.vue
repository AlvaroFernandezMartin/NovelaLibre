<template>
    <Layout titulo="Carrito de Compras">
      <div v-if="Object.keys(frutasStore.carrito).length === 0" class="alert alert-warning text-center">
        Tu carrito está vacío 😢
      </div>
  
      <div v-else class="card p-4 shadow-sm">
        <ul class="list-group">
          <li v-for="(cantidad, fruta) in frutasStore.carrito" :key="fruta" class="list-group-item d-flex justify-content-between align-items-center">
             {{ fruta }} ({{ cantidad }})
            <button class="btn btn-danger btn-sm" @click="frutasStore.quitarDelCarrito(fruta)">
              Quitar
            </button>
          </li>
        </ul>
        <div class="mt-3">
          <button class="btn btn-danger w-100" @click="frutasStore.vaciarCarrito">
            Vaciar Carrito
          </button>
        </div>
      </div>
  
      <div class="mt-3">
        <router-link to="/" class="btn btn-secondary w-100">Seguir Comprando</router-link>
      </div>
    </Layout>
  </template>
  
  <script setup lang="ts">
  import { useFrutasStore } from '../stores/frutas'
  import Layout from '../components/Layout.vue'
  
  const frutasStore = useFrutasStore()
  </script>
  