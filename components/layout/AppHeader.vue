<template>
  <header class="sticky top-0 z-20 w-full bg-white border-b border-gray-300 bg-opacity-90">
    <div class="w-full py-4 mx-auto max-w-7xl">
      <div class="flex items-center justify-between px-10 lg:px-24">
        <nuxt-link to="/" class="text-2xl font-semibold text-gray-900">
          MA
        </nuxt-link>
        <div class="hidden space-x-2 text-lg text-gray-900 md:flex">
          <nuxt-link
            v-for="nav in navs"
            :key="nav.name"
            class="px-4 py-2 font-semibold duration-200 rounded transition-background hover:bg-gray-200 "
            :to="nav.link"
          >
            {{ nav.name }}
          </nuxt-link>
        </div>
        <div class="md:hidden">
          <button :aria-label="show ? 'close' : 'menu'" class="block text-gray-900 transition hover:opacity-50" @click="show = !show">
            <svg
              v-show="!show"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            <svg
              v-show="show"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <a href="https://github.com/xiaosasori" class="hidden text-gray-900 transition-colors duration-200 md:block hover:text-gray-500"><span class="sr-only">Tailwind CSS on GitHub</span><svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg></a>
      </div>
    </div>
    <transition name="header">
      <nav v-show="show" class="absolute left-0 right-0 flex flex-col px-4 pb-4 mt-2 space-y-2 bg-white md:hidden">
        <button v-show="show" aria-label="close" tabindex="-1" class="fixed inset-0 w-full cursor-default" @click="show = false" />
        <nuxt-link v-for="nav in navs" :key="nav.name" :to="nav.link" class="z-20 px-2 py-2 text-gray-900 transition rounded hover:bg-gray-400 hover:bg-opacity-50" @click.native="close">
          {{ nav.name }}
        </nuxt-link>
      </nav>
    </transition>
  </header>
</template>

<script>

export default {
  data () {
    return {
      navs: [
        { name: 'Home', link: '/' },
        { name: 'Projects', link: '/projects' },
        { name: 'Bookmarks', link: '/bookmarks' },
        { name: 'Notes', link: '/notes' },
        { name: 'About', link: '/about' }
      ],
      show: false
    }
  },
  methods: {
    close () {
      this.show = false
    },
    async fetchSuggestions (searchInput) {
      const { data } = await this.$storyapi.get('cdn/stories', {
        starts_with: 'articles/',
        resolve_relations: 'author',
        search_term: searchInput,
        per_page: 5
      })

      return data.stories
    }
  }
}
</script>
<style scoped>
.header-enter,
.header-leave-to {
  opacity: 0;
}

.header-enter-active,
.header-leave-active {
  transition: all 0.2s ease;
}
</style>
