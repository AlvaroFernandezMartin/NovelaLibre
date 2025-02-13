import { ref } from 'vue'

export interface Fruit {
  id: number
  name: string
  family: string
  order: string
  genus: string
  nutritions: {
    carbohydrates: number
    protein: number
    fat: number
    calories: number
    sugar: number
  }
}

export function useFruitsApi() {
  const fruits = ref<Fruit[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchFruits = async () => {
    loading.value = true
    error.value = null
    try {
        const response = await fetch('/api')
      if (!response.ok) throw new Error('Error al obtener las frutas')
      const data = await response.json() as Fruit[]
      fruits.value = data
    } catch (err) {
      error.value = (err as Error).message
    } finally {
      loading.value = false
    }
  }

  return { fruits, loading, error, fetchFruits }
}
