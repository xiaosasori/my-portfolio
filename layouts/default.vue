<template>
  <div>
    <AppHeader />
    <main class="w-11/12 mx-auto antialiased main sm:w-4/5 lg:w-full">
      <Nuxt />
    </main>
    <footer class="pt-6 pb-4 text-sm text-center text-gray-600">
      <p>Made with ♥ by Minh Anh</p>
      <p>© 2021</p>
    </footer>
  </div>
</template>
<script>
import AppHeader from '@/components/layout/AppHeader'
export default {
  components: { AppHeader }
}
</script>
<style>
.main {
  min-height: calc(100vh - 160px);
}
</style>
