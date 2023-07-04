<template>
  <div class="p-6">
    <input type="text" v-model='keyWord'
      class="px-4 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-500 w-full"
      placeholder="Search for meals" @change="searchMeals" />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of   meals  " :key="meal.idMeal" :meal="meal"/>
  </div>
</template>
salmon

<script setup>
import { ref } from 'vue'
import { computed } from 'vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import store from '../store';
import MealItem from '../components/MealItem.vue';

const route = useRouter()

const meals = computed(() => store.state.searchedMeals)
const keyWord = ref('')
const searchMeals = async () => {
  store.dispatch('searchMealsByName', keyWord.value)
}

onMounted(() => {
  keyWord.value = route.currentRoute.value.params.name
  if (keyWord.value) {
    searchMeals()
  }
})
</script>