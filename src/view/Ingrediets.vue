<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of   meals  " :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import MealItem from '../components/MealItem.vue';
const route = useRoute()
const meals = ref([])
onMounted(async () => {
 if (route.params.category) {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.category}`)
  if (response.statusCode == 200) {
    response.json()
  }
  meals.value = response.data.meals
 }
})

</script>