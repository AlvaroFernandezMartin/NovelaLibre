<template>
    <Layout titulo="Agregar Fruta">
      <div class="card p-4 shadow-sm">
        <div class="mb-3">
          <input v-model="nuevaFruta" type="text" class="form-control" placeholder="Ingrese una fruta" />
        </div>
        <button @click="agregarFruta" class="btn btn-primary w-100">Agregar</button>
      </div>
    </Layout>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useFrutasStore } from '../stores/frutas'
  import { useRouter } from 'vue-router'
  import Layout from '../components/Layout.vue'
  
  const frutasStore = useFrutasStore()
  const router = useRouter()
  
  const nuevaFruta = ref('')
  
  const agregarFruta = () => {
    if (nuevaFruta.value.trim() !== '') {
      frutasStore.agregarAlCarrito(nuevaFruta.value)
      nuevaFruta.value = ''
      router.push('/')
    }
  }
  </script>
  