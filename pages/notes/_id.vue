<template>
  <div class="min-h-screen pt-4 pb-10 dark:bg-bdark bg-gray-100">
    <div class="container grid gap-4 pt-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" style="width: 80%">
      <aside class="sm:hidden md:block">
        <div class="sticky dark:text-gray-300 top-24 flex flex-col overflow-y-auto">
          <nuxt-link :to="$route.path" class="p-2 cursor-pointer dark:hover:bg-blue-900 hover:bg-gray-200">
            Top
          </nuxt-link>
          <a v-for="head in heads" :key="head.link" :href="`#${head.link}`" class="dark:hover:bg-blue-900 p-2 cursor-pointer hover:bg-gray-200">
            {{ head.text }}
          </a>
        </div>
      </aside>
      <main class="col-span-3 space-y-4 dark:bg-bdark-light bg-white">
        <img class="rounded" :src="article.content.image.filename" alt="golang">
        <div class="px-6 py-3">
          <div class="flex mt-4 space-x-2">
            <nuxt-link
              v-for="tag in article.tag_list"
              :key="tag"
              :to="`/tag/${tagSlug(tag)}`"
              class="px-2 py-1 text-sm text-white uppercase rounded-full dark:border dark:border-gray-300"
            >
              {{ tag }}
            </nuxt-link>
          </div>
          <!-- eslint-disable-next-line -->
          <div class="mt-8 markdown-body dark:text-gray-300" v-html="$md.render(article.content.content)" />
        </div>
      </main>
      <aside class="sm:hidden lg:block">
        <a href="https://youtu.be/7s6OHfdX9hA" target="_blank" rel="noopener noreferrer" class="block sticky top-24">
          <img src="/batchanhdao.jpeg" alt="The Noble Eightfold Path">
          <!-- <img src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" alt="ads"> -->
        </a>
      </aside>
    </div>
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
      by_slugs: '*/' + params.id
    })
    const article = res.data.stories[0]
    if (!article) { return error(`Article with slug ${params.id} not found`) }

    article.content.date = new Date(article.content.date)

    const heads = article.content.content
      .split('\n')
      .filter(line => line.startsWith('##'))
      .map(line => ({ text: line.substring(2), link: kebabCase(line.substring(2)) }))
    return { heads, article, author: article.content.author }
  },
  methods: {
    tagSlug (tag) {
      return kebabCase(tag)
    }
  }
}
</script>
