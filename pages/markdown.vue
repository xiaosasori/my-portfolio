<template>
  <div class="flex space-x-2 bg-gray-200" style="height: calc(100vh - 60px)">
    <div class="w-1/2">
      <textarea v-model="content" spellcheck="false" class="block w-full h-full p-1" />
    </div>
    <div class="w-1/2 p-2 overflow-auto bg-white">
      <!-- eslint-disable-next-line -->
      <div class="markdown-body" v-html="md"></div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
export default {
  data () {
    return {
      content: '',
      md: null
    }
  },
  watch: {
    content () {
      this.getMarkdown()
    }
  },
  methods: {
    getMarkdown: debounce(function () {
      this.md = this.$md.render(this.content)
    }, 250)
  }
}
</script>

<style>

</style>
