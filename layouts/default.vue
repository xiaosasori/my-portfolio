<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="dark:bg-bdark antialiased main flex-grow">
      <Nuxt />
    </main>
    <footer class="dark:bg-bdark dark:text-gray-300 pt-6 pb-4 text-sm text-center text-gray-600">
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
