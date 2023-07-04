<template>
  <div class="bg-white shadow rounded">
    <router-link :to="{ name: 'mealDitails', params: { id: meal.idMeal } }">
      <img class='rounded-t-xl h-48 object-cover w-full' :src="meal.strMealThumb" :atl="meal.strMeal">
    </router-link>
    <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
    <p class="p-3 font-light">sdfrgaeruyvhaieurnvgbuiaoerhguiaernguiaerhgaukerbn
      kuhakuierhvggukaerghk uyage baeouirghkauerb aeruyggaerugbaeruoygh oaheru baerouvb</p>
    <div class="p-3 flex justify-between items-center">
      <YoutubeButton :href="meal.strYoutube" />
      <router-link class="hover:opacity-50 duration-300"
        :to="{ name: 'mealDitails', params: { id: meal.idMeal } }">More Info</router-link>
    </div>
  </div>
</template>
<script setup>
import YoutubeButton from './YoutubeButton.vue'
const { meal } = defineProps({
  meal: Object
})
</script>