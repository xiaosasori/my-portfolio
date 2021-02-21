<template>
  <div id="post" v-editable="blok">
    <div class="post-thumbnail" :style="{backgroundImage: 'url(' + image + ')'}" />
    <section class="post-content">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
    </section>
  </div>
</template>

<script>
import {createSEOMeta} from '@/utils/seo.js'
export default {
  head() {
    return {
      title: this.title,
      meta: createSEOMeta({ description: this.content })
    }
  },
  asyncData (context) {
    return context.app.$storyapi
      .get('cdn/stories/blog/' + context.params.postId, {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then((res) => {
        return {
          blok: res.data.story.content,
          image: res.data.story.content.thumbnail.filename,
          title: res.data.story.content.title,
          content: res.data.story.content.content
        }
      })
  }
//   mounted () {
//     this.$storybridge.init()
//     this.$storybridge.on('change', () => {
//       location.reload()
//     })
//   }
}
</script>

<style>
.post-thumbnail {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}
.post-content {
  width: 80%;
  max-width: 500px;
  margin: auto;
}
.post-content p {
  white-space: pre-line;
}
</style>
