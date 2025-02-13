<template>
  <Layout titulo="Frutas Disponibles">
    <div v-if="loading" class="alert alert-info">Cargando frutas...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <ul v-if="!loading && !error" class="list-group">
      <li v-for="fruit in fruits" :key="fruit.id" class="list-group-item">
        <strong>{{ fruit.name }}</strong>  
        <ul class="list-unstyled">
          <li>🧬 Familia: {{ fruit.family }}</li>
          <li>🌱 Género: {{ fruit.genus }}</li>
          <li>📑 Orden: {{ fruit.order }}</li>
          <li>🔥 Calorías: {{ fruit.nutritions.calories }}</li>
          <li>🍞 Carbohidratos: {{ fruit.nutritions.carbohydrates }}g</li>
          <li>💪 Proteínas: {{ fruit.nutritions.protein }}g</li>
          <li>🧈 Grasas: {{ fruit.nutritions.fat }}g</li>
          <li>🍬 Azúcar: {{ fruit.nutritions.sugar }}g</li>
        </ul>
      </li>
    </ul>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../components/Layout.vue'
import { useFruitsApi } from '../composables/useFruitsApi'

const { fruits, loading, error, fetchFruits } = useFruitsApi()

fetchFruits()
</script>
