<template>
  <div>
    <AppHeader />
    <main>
      <Nuxt />
    </main>
  </div>
</template>
<script>
import AppHeader from '@/components/layout/AppHeader'
export default {
  components: { AppHeader }
}
</script>
<style>

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: "Lato", sans-serif;
}
.main-content {
  margin-top: 4.5rem;
}
</style>
