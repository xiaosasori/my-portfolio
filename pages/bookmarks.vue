<template>
  <div class="min-h-screen py-4 bg-gray-100">
    <div class="container grid gap-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" style="width: 80%">
      <aside class="sticky sm:hidden md:block top-20" style="height: 80vh">
        <h2 class="p-2 font-bold">
          Tags
        </h2>
        <div class="flex flex-col h-full overflow-y-auto">
          <p class="p-2 cursor-pointer hover:bg-gray-200" @click="setFilter('')">
            #all
          </p>
          <p v-for="tag in tags" :key="tag.name" class="p-2 cursor-pointer hover:bg-gray-200" :class="{'bg-gray-300': filterBy === tag}" @click="setFilter(tag.name)">
            #{{ tag.name }} ({{ tag['taggings_count'] }})
          </p>
        </div>
      </aside>
      <main class="col-span-3 mt-2 space-y-4">
        <a v-for="article in list" :key="article.content.title" :href="article.content.url" class="flex px-6 py-4 space-x-2 bg-white border border-gray-200 rounded">
          <div class="flex-grow">
            <div class="flex justify-between space-x-3 items-center">
              <h1 class="text-xl font-bold">
                {{ article.content.title }}
              </h1>
              <p class="text-sm text-gray-500">
                {{ article.content['published_at'].toLocaleDateString() }}
              </p>
            </div>
            <p class="flex mt-2 space-x-2 text-sm text-gray-500">
              <span v-for="tag in article['tag_list']" :key="tag">#{{ tag }}</span>
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
  async asyncData ({ app }) {
    const [res, res2] = await Promise.all([
      app.$storyapi.get('cdn/stories/', {
        starts_with: 'bookmarks/',
        sort_by: 'content.published_at:desc'
      }),
      app.$storyapi.get('cdn/tags/', {
        starts_with: 'bookmarks/'
      })
    ])

    // Let's convert content.date from a String to a Date
    const articles = res.data.stories.map((story) => {
      // new Date('2021-03-05 22:58')
      story.content.published_at = new Date(story.content.published_at)
      return story
    })
    return { articles, tags: res2.data.tags }
  },
  data () {
    return { filterBy: null }
  },
  computed: {
    list () {
      if (!this.filterBy) { return this.articles }
      return this.articles.filter(article => article.tag_list.includes(this.filterBy))
    }
  },
  methods: {
    setFilter (tag) {
      if (tag === this.filterBy) {
        this.filterBy = ''
      } else {
        this.filterBy = tag
      }
    }
  }
}
// {                                                                                          12:54:46
//   name: 'Pass Slots through from Parent to Child Components',
//   created_at: '2021-03-31T03:18:20.142Z',
//   published_at: '2021-03-31T03:18:59.961Z',
//   alternates: [],
//   id: 43940188,
//   uuid: '1844d584-832d-49a2-9acb-ff6368e03531',
//   content: {
//     url: 'https://gist.github.com/loilo/73c55ed04917ecf5d682ec70a2a1b8e2',
//     _uid: '8556ddbc-7f00-41bf-99ea-925217938b65',
//     title: 'Pass Slots through from Parent to Child Components',
//     component: 'bookmark',
//     published_at: 2021-03-05T13:58:00.000Z,
//     date: Invalid Date
//   },
//   slug: 'pass-slots-through-from-parent-to-child-components',
//   full_slug: 'bookmarks/pass-slots-through-from-parent-to-child-components',
//   default_full_slug: null,
//   sort_by_date: null,
//   position: -140,
//   tag_list: [
//     'vue'
//   ],
//   is_startpage: false,
//   parent_id: 43940037,
//   meta_data: null,
//   group_id: '2f57c92d-06bb-4331-95a8-d7e78ba4d3bf',
//   first_published_at: '2021-03-31T03:18:59.961Z',
//   release_id: null,
//   lang: 'default',
//   path: null,
//   translated_slugs: []
// }
</script>
