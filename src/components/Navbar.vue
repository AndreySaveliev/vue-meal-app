<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5">
        Home
      </router-link>
      <div class="flex gap-1">
        <router-link :to="{ name: 'byName' }"
          class="inline-flex px-2 h-full bg-gray-300 hover:bg-opacity-50 items-center duration-300">
          Search Meals
        </router-link>
        <router-link :to="{ name: 'byLetter' }"
          class="inline-flex px-2 h-full bg-gray-300 hover:bg-opacity-50 items-center duration-300">
          Meals by Lette
        </router-link>
        <router-link :to="{ name: 'byCategory'}"
          class="inline-flex px-2 h-full bg-gray-300 hover:bg-opacity-50 items-center duration-300">
          Meals by Category
        </router-link>
      </div>
    </header>
</template>