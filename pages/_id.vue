<template>
  <div v-if="article" class="container mx-auto px-4 mt-4">
    <header>
      <h2 class="text-5xl">
        {{ article.content.title }}
      </h2>
      <div class="flex items-center mt-6">
        <img
          class="w-20 rounded-full border-4 border-main"
          :src="author.content.avatar.filename"
          :alt="author.content.name"
        >
        <div class="ml-6">
          <p class="text-xl font-bold">
            {{ author.name }}
          </p>
          <p class="text-sm mt-1">
            {{ article.content.date.toLocaleDateString() }}
          </p>
        </div>
      </div>
    </header>
    <div class="mt-4">
      <nuxt-link
        v-for="tag in article.tag_list"
        :key="tag"
        :to="`/topics/${tagSlug(tag)}`"
        class="rounded-full text-white bg-main uppercase text-sm mr-2 px-2 py-1"
      >
        {{ tag }}
      </nuxt-link>
    </div>
    <!-- eslint-disable-next-line -->
    <div class="prose mt-8" v-html="$md.render(article.content.content)" />
  </div>
</template>

<script>
import kebabCase from 'lodash/kebabCase'

export default {
  async asyncData ({ app, error, params }) {
    // Get the slug from the route
    const res = await app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      // Prepend */ to match with the first part of the full_slug
      by_slugs: '*/' + params.id,
      resolve_relations: 'author'
    })
    console.log(res.data)
    const article = res.data.stories[0]
    if (!article) { return error(`Article with slug ${params.id} not found`) }

    article.content.date = new Date(article.content.date)

    return { article, author: article.content.author }
    // return { article: null, author: 'asd' }
  },
  methods: {
    tagSlug (tag) {
      return kebabCase(tag)
    }
  }
}
</script>
