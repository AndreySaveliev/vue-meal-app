<template>
  <div class="flex gap-2 justify-center mt-2">
    <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of  letters "
      :key="letter">
      {{ letter }}
    </router-link>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of   meals  " :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../store';
import { onMounted, watch} from 'vue';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.state.mealsByLetter)
const route = useRoute()

watch(route, () => {
  if (route.params.letter) {
    store.dispatch('serachMealsByLetter', route.params.letter)
  }
})

onMounted(() => {
  if (route.params.letter) {
    store.dispatch('serachMealsByLetter', route.params.letter)
  }
})

</script>