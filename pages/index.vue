<template>
  <section id="posts">
    <PostPreview
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :thumbnail-image="post.thumbnailUrl"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'
export default {
  components: {
    PostPreview
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: context.isDev ? 'draft' : 'published',
      starts_with: 'blog/' // fetch multiple elements in folder blog
    }).then((res) => {
      return {
        posts: res.data.stories.map(bp =>
          ({ id: bp.slug, title: bp.content.title, previewText: bp.content.summary, thumbnailUrl: bp.content.thumbnail.filename }))
      }
    })
  },
  data () {
    return {
      posts: [
        {
          title: 'A New Beginning',
          previewText: "This will be awesome, don't miss it!",
          thumbnailUrl:
            'http://www.healthyfood.co.uk/wp-content/uploads/2015/01/Cherry-tomato-bocc-olive-basil-pasta.jpg',
          id: 'a-new-beginning'
        },
        {
          title: 'A Second Beginning',
          previewText: "This will be awesome, don't miss it!",
          thumbnailUrl:
            'http://www.healthyfood.co.uk/wp-content/uploads/2015/01/Cherry-tomato-bocc-olive-basil-pasta.jpg',
          id: 'a-second-beginning'
        }
      ]
    }
  }
}
</script>

<style scoped>
#posts {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>
