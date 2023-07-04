import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import SearchByName from '../view/SearchByName.vue';
import SearchByLetter from '../view/SearchByLetter.vue';
import SearchByIngredients from '../view/SearchByIngredient.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import MealDitails from '../view/MealDitails.vue'
import Ingrediets from '../view/Ingrediets.vue'
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/letter/:letter?',
        name: 'byLetter',
        component: SearchByLetter,
      },
      {
        path: '/name/:name?',
        name: 'byName',
        component: SearchByName,
      },
      {
        path: '/category/:category?',
        name: 'category',
        component: Ingrediets,
      },
      {
        path: '/category/',
        name: 'byCategory',
        component: SearchByIngredients,
      },
    ],
  },
  {
    path: '/meal/:id',
    name: 'mealDitails',
    component: MealDitails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
