<template>
  <nuxt-link :to="`notes${slug}`" class="block overflow-hidden text-gray-800 duration-300 ease-out transform rounded-lg shadow-lg hover:scale-105">
    <div style="padding-bottom: 40%" class="relative overflow-hidden">
      <img class="absolute inset-0" :src="image" alt="background image">
    </div>
    <div class="p-6">
      <header class="text-2xl font-bold">
        {{ title }}
      </header>
      <!-- <p class="mt-4">
        {{ description }}
      </p> -->
      <div class="mt-4">
        <span v-for="tag in tags" :key="tag" class="px-2 py-1 mr-2 text-sm font-semibold text-white uppercase rounded-full bg-main">{{ tag }}</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: String,
    slug: String,
    description: String,
    author: Object,
    date: String,
    image: String,
    tags: Array
  }
}
</script>
