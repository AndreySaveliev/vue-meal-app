<template>
  <div class="flex p-8 flex-col">

    <div class="flex gap-2 justify-center mt-2">
      
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import axios from 'axios';
const ingredients = []

onMounted(async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
  if (response.statusCode == 200) {
    response.json()
  }
  ingredients.push(response.data)
})
</script>
