<template>
  <div class="grid grid-flow-row grid-cols-3 gap-3 w-fit self-center mx-auto">
    <router-link :to="{ name: 'category', params: { category: ingridient?.strCategory } }" v-for="ingridient of ingridients">
      <!-- <div > -->
        <img :src="ingridient.strCategoryThumb">
        <p class="font-medium text-lg text-center">{{ ingridient.strCategory }}</p>
      <!-- </div> -->
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const ingridients = ref([])

// const searchCategory = async (category) => {
//   const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
//   if (response.statusCode == 200) {
//     response.json()
//   }
//   ingridients.value = response.data.categories
// }

onMounted(async () => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  if (response.statusCode == 200) {
    response.json()
  }
  ingridients.value = response.data.categories
})
</script>