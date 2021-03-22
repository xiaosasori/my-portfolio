<template>
  <div class="min-h-screen py-4 bg-gray-100">
    <div class="container grid gap-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" style="width: 80%">
      <aside class="sticky sm:hidden md:block top-20" style="height: 80vh">
        <h2 class="p-2 font-bold">
          Tags
        </h2>
        <div class="flex flex-col h-full overflow-y-auto">
          <p v-for="tag in tags" :key="tag" class="p-2 cursor-pointer hover:bg-gray-200" :class="{'bg-gray-300': filterBy === tag}" @click="setFilter(tag)">
            #{{ tag }}
          </p>
        </div>
      </aside>
      <main class="col-span-3 mt-2 space-y-4">
        <a v-for="topic in list" :key="topic.article.id" :href="topic.article.url" class="flex px-4 py-4 space-x-2 bg-white border border-gray-200 rounded">
          <div class="mt-1">
            <img class="w-8 h-8 rounded-full" :src="topic.article.user['profile_image_90']" alt="avatar">
          </div>
          <div class="flex-grow">
            <div class="">
              <p class="text-sm text-gray-500">
                {{ topic.article.user.name }}
              </p>
              <p class="text-sm text-gray-500">
                {{ formatDate(topic.article['published_at']) }}
              </p>
            </div>
            <h1 class="mt-4 text-xl font-bold">
              {{ topic.article.title }}
            </h1>
            <p class="flex mt-4 space-x-2 text-sm text-gray-500">
              <span v-for="tag in formatTags(topic.article.tags)" :key="tag">#{{ tag }}</span>
              <!-- <span>#beginers</span> -->
            </p>
          </div>
        </a>
      </main>
      <aside class="sticky h-screen p-2 top-20 sm:hidden lg:block">
        <div class="h-10">
          <img src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" alt="ads">
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const data = await $axios.$get('https://dev.to/api/readinglist', { headers: { 'api-key': process.env.DEV_KEY } })
    return { articles: data }
  },
  data () {
    return { tags: [], filterBy: null }
  },
  computed: {
    list () {
      if (!this.filterBy) { return this.articles }
      return this.articles.filter(topic => topic.article.tags.includes(this.filterBy))
    }
  },
  methods: {
    formatDate (date) {
      return new Date(date).toLocaleDateString()
    },
    formatTags (tags) {
      const res = tags.split(', ')
      for (const i of res) {
        if (!this.tags.includes(i)) {
          this.tags.push(i)
        }
      }
      return res
    },
    setFilter (tag) {
      if (tag === this.filterBy) {
        this.filterBy = ''
      } else {
        this.filterBy = tag
      }
    }
  }
}
</script>
