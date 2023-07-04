<template>
  <a :href='href' target="_blank"
    class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-600 hover:text-white duration-300">YouTube</a>
</template>

<script>
import { defineProps } from 'vue';

const props = defineProps({
  href: String
})

</script>
