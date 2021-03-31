<template>
  <div class="w-11/12 max-w-5xl pt-4 pb-8 mx-auto lg:w-4/5 sm:w-4/5">
    <div class="mt-10" style="box-shadow: 0 1rem 2rem rgba(0,0,0,.4);">
      <div class="flex px-4 py-3 space-x-2 bg-gray-400 rounded-t-lg bg-opacity-60">
        <span class="block w-4 h-4 bg-red-400 rounded-full" />
        <span class="block w-4 h-4 bg-yellow-500 rounded-full" />
        <span class="block w-4 h-4 bg-green-500 rounded-full" />
      </div>
      <div class="px-4 py-6 text-2xl bg-gray-800 md:px-10 md:py-12" style="font-family: 'Courier New',Courier,monospace">
        <p>
          <span class="text-purple-400">minhanh $</span>
          <span class="text-white">cat minhanh</span>
        </p><br>
        <p>
          <span class="text-purple-400">aboutminhanh </span>
          <span class="text-green-400">(master) $</span>
        </p>
        <p class="text-white">
          <br>
          Hello! I'm Minh Anh, a fullstack developer from Vietnam. <br><br>
          I love creating UI components with <span class="font-semibold vue">Vue</span>, and I'm currently studying Golang.
          My core skill is based on JavaScript and I love to do most of the things using JavaScript.<br><br>
          I have graduated with a bachelor's degree in Software Engineering from FPT University at Hanoi, Vietnam in 2019. <br><br>
          I am currently living in Japan and available for any kind of job opportunity that suits my interests.
        </p>
      </div>
    </div>
    <!--  -->
    <div class="mt-16 " style="box-shadow: 0 1rem 2rem rgba(0,0,0,.4);">
      <div class="flex px-4 py-3 space-x-2 bg-gray-400 rounded-t-lg bg-opacity-60">
        <span class="block w-4 h-4 bg-red-400 rounded-full" />
        <span class="block w-4 h-4 bg-yellow-500 rounded-full" />
        <span class="block w-4 h-4 bg-green-500 rounded-full" />
      </div>
      <div class="px-4 py-6 text-2xl bg-gray-800 md:px-10 md:py-12" style="font-family: 'Courier New',Courier,monospace">
        <p>
          <span class="text-purple-400">minhanh $</span>
          <span class="text-white">cat skills/tools</span>
        </p><br>
        <p>
          <span class="text-purple-400">skills/tools </span>
          <span class="text-green-400">(master) $</span>
          <span class="text-white">ls</span>
        </p> <br>
        <p class="text-purple-400">
          Proficient In
        </p><br>
        <div class="grid grid-cols-2 text-white">
          <p>Vue</p>
          <p>Nuxt</p>
          <p>Semantic HTML</p>
          <p>Express JS</p>
          <p>MongoDB</p>
          <p>GraphQL</p>
        </div>
        <br>
        <p class="text-purple-400">
          Others
        </p><br>
        <div class="grid grid-cols-2 text-white">
          <p>React</p>
          <p>React Native</p>
          <p>Go</p>
          <p>Jest</p>
          <p>Cypress</p>
          <p>Swift</p>
          <p>Firebase</p>
          <p>SQL</p>
        </div>
        <br>
        <p class="text-purple-400">
          Tools
        </p><br>
        <div class="grid grid-cols-2 text-white">
          <p>Git</p>
          <p>Docker</p>
          <p>Kubernetes</p>
        </div>
      </div>
    </div>
    <div class="mt-16" style="box-shadow: 0 1rem 2rem rgba(0,0,0,.4);">
      <div class="flex px-4 py-3 space-x-2 bg-gray-400 rounded-t-lg bg-opacity-60">
        <span class="block w-4 h-4 bg-red-400 rounded-full" />
        <span class="block w-4 h-4 bg-yellow-500 rounded-full" />
        <span class="block w-4 h-4 bg-green-500 rounded-full" />
      </div>
      <div class="px-4 py-6 text-2xl bg-gray-800 md:px-10 md:py-12" style="font-family: 'Courier New',Courier,monospace">
        <p>
          <span class="text-purple-400">minhanh $</span>
          <span class="text-white">cd hobbies/interests</span>
        </p><br>
        <p>
          <span class="text-purple-400">hobbies/interests </span>
          <span class="text-green-400">(master) $</span>
          <span class="text-white">ls</span>
        </p>
        <p class="text-white">
          <br>
          📖 chinese novel (修仙)
          <br><br>
          📿 buddha stories
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true
}
</script>

<style scoped>
.vue {
  animation: vue 2s infinite ease;
}
@keyframes vue {
  0% {
    color: #70dac1;
  }
  33% {
    color: #0eebbb;
  }

  66% {
    color: #06ee7a;
  }
  100% {
    color: #70dac1;
  }
}
</style>
