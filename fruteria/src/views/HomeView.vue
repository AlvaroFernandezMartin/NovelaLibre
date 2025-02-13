<template>
    <Layout titulo="Lista de Frutas">
      <div class="card p-4 shadow-sm">
        <ul class="list-group">
          <li v-for="fruta in frutasStore.frutas" :key="fruta" class="list-group-item d-flex justify-content-between align-items-center">
             {{ fruta }}
            <button class="btn btn-success btn-sm" @click="frutasStore.agregarAlCarrito(fruta)">
              Agregar al carrito
            </button>
          </li>
        </ul>
        <div class="mt-3">
          <router-link to="/carrito" class="btn btn-primary w-100">Ver Carrito</router-link>
        </div>
      </div>
    </Layout>
  </template>
  
  <script setup lang="ts">
  import { useFrutasStore } from '../stores/frutas'
  import Layout from '../components/Layout.vue'
  
  const frutasStore = useFrutasStore()
  </script>
  