<template>
    <div class="container mt-4">
      <header class="text-center mb-4">
        <h1 class="fw-bold">{{ titulo }}</h1>
        <nav class="nav justify-content-center">
          <router-link class="nav-link" to="/">Productos a la venta</router-link>
          <router-link class="nav-link" to="/info-nutri">Información nutricional</router-link>
        </nav>
      </header>
  
      <main>
        <slot></slot>
      </main>
    </div>

  </template>
  
  <script setup lang="ts">
  defineProps<{ titulo: string }>()
  </script>
  
  <style scoped>
  .nav-link {
    font-size: 18px;
    font-weight: bold;
  }

  </style>
  