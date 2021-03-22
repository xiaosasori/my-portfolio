<template>
  <header class="sticky top-0 z-10 w-full py-2 bg-main">
    <div class="w-full px-4 mx-auto max-w-7xl">
      <div class="flex items-center justify-between">
        <nuxt-link to="/" class="text-2xl font-semibold text-white">
          MA.dev
        </nuxt-link>
        <div class="flex space-x-2 text-lg text-white">
          <nuxt-link class="px-4 py-2 font-semibold duration-200 rounded transition-background hover:bg-green-400" to="/">
            Home
          </nuxt-link>
          <nuxt-link class="px-4 py-2 font-semibold duration-200 rounded transition-background hover:bg-green-400" to="/bookmarks">
            Bookmarks
          </nuxt-link>
          <nuxt-link class="px-4 py-2 font-semibold duration-200 rounded transition-background hover:bg-green-400" to="/notes">
            Notes
          </nuxt-link>
          <nuxt-link class="px-4 py-2 font-semibold duration-200 rounded transition-background hover:bg-green-400" to="/markdown">
            Markdown
          </nuxt-link>
        </div>
        <a href="https://github.com/xiaosasori" class="text-white transition-colors duration-200 hover:text-gray-500"><span class="sr-only">Tailwind CSS on GitHub</span><svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg></a>
        <!-- <SearchBox :search="fetchSuggestions" class="flex-1 max-w-sm ml-12" /> -->
      </div>
    </div>
  </header>
</template>

<script>

export default {
  methods: {
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
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
}
</style>
