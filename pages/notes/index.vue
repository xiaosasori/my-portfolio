<template>
  <div class="pt-10 pb-8">
    <div class="px-8 mx-auto md:px-20 max-w-7xl">
      <div class="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        <ArticleCard
          v-for="article in articles"
          :key="article.content.title"
          :slug="`/${article.slug}`"
          :title="article.content.title"
          :description="article.content.description"
          :date="article.content.date.toLocaleDateString()"
          :image="article.content.image.filename"
          :tags="article['tag_list']"
          class="card-note"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from '@/components/ui/ArticleCard'
// import gsap from 'gsap'
export default {
  components: { ArticleCard },
  async asyncData ({ app }) {
    const res = await app.$storyapi.get('cdn/stories/', {
      starts_with: 'articles/'
    })

    //   // Let's convert content.date from a String to a Date
    const articles = res.data.stories.map((story) => {
      story.content.date = new Date(story.content.date)
      return story
    })
    // console.log(articles)
    return { articles }
  }
  // mounted () {
  // gsap.from('.card-note', {
  //   duration: 0.4,
  //   opacity: 0,
  //   scale: 0.5,
  //   y: 200,
  //   ease: 'power0',
  //   stagger: 0.25
  // stagger: {
  //   each: 0.5,
  //   from: 'edges' // outside to center; 'center' for inverting animation
  // }
  // })
  // }
}
</script>
