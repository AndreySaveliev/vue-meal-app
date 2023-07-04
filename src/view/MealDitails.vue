<template>
  <div class="grid grid-cols-1 h-screen items-center md:grid-cols-4 columns-xl">
    <img :src="meal.strMealThumb" :alt="meal.strMeal">
    <h1 class="text-5xl font-bold mb-5 w-min">{{ meal.strMeal }}</h1>
    <div class="flex flex-col items-start">
      <div class="mb-2">
        <p>Category: <span class="font-semibold">{{ meal.strCategory }}</span></p>
        <p>Country: <span class="font-semibold">{{ meal.strArea }}</span></p>
      </div>
      <p class="font-thin">{{ meal.strInstructions }}</p>
    </div>
    <div class="grid grid-cols-2 ">
      <div class="grid grid-flow-row justify-center md:justify-end">
        <h2 class="font-bold">Measures:</h2>
        <template v-for="(el, index) of new Array(20)">
          <p v-if="meal[`strIngredient${index + 1}`]">
            {{index+1}}. {{ meal[`strIngredient${index + 1}`] }}
          </p>
        </template>
      </div>
      <div class="grid grid-flow-row justify-center md:justify-end">
        <h2 class="font-bold">Ingridient:</h2>
        <template v-for="(el, index) of new Array(20)">
          <p v-if="meal[`strMeasure${index + 1}`]">
            {{index+1}}. {{meal[`strMeasure${index + 1}`] }}
          </p>
        </template>
      </div>
    </div>
    <div>
      <YoutubeButton :href="meal.strYoutube"/>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import YoutubeButton from '../components/YoutubeButton.vue'


const meal = ref({})
const route = useRouter()

onMounted(async () => {
  const id = route.currentRoute.value.params.id
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  if (response.statusCode == 200) {
    response.json()
  }
  meal.value = response.data.meals[0]
})
</script>