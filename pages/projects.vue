<template>
  <div class="w-11/12 max-w-5xl pt-10 pb-8 mx-auto lg:w-4/5 sm:w-4/5">
    <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-gray-300">
      Some Things I've Built
    </h2>
    <ul class="mt-10 space-y-8 lg:space-y-24">
      <li v-for="(project, index) in projects" :key="project.name" class="grid grid-cols-12 pj">
        <div class="relative pj-left" style="grid-row: 1 / 1">
          <div style="padding-bottom:62.2857%">
            <div class="absolute overflow-hidden rounded-lg">
              <img class="w-full h-auto ml-auto" :src="project.image" :alt="project.name">
            </div>
          </div>
        </div>
        <div style="grid-row: 1 / 1" class="z-10 flex flex-col justify-center p-8 text-white bg-gray-900 rounded md:z-0 dark:text-gray-300 bg-opacity-90 md:bg-transparent md:p-0 md:text-gray-900 pj-right" :class="[index % 2 === 0 ? 'md:text-right' : 'md:text-left']">
          <p class="text-sm font-semibold dark:text-tdark">
            Feature Project
          </p>
          <h3 class="text-lg font-semibold">
            {{ project.name }}
          </h3>
          <div class="z-10 p-4 mt-4 border rounded dark:md:bg-bdark-light dark:md:border-none md:bg-white md:border-gray-900">
            <p>{{ project.description }}</p>
          </div>
          <div class="mt-4 space-x-4 font-light lg:text-gray-900 dark:text-gray-300">
            <span v-for="tech in project.techs" :key="tech">{{ tech }}</span>
          </div>
          <div class="mt-4 space-x-3">
            <a
              class="inline-block dark:hover:text-tdark hover:text-purple-500"
              target="_blank"
              :href="project.git"
              rel="noopener noreferrer"
              title="Github"
            >
              <span class="sr-only">Github</span>
              <svg class="w-6 h-6" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
            </a>
            <a
              v-if="project.link"
              class="inline-block dark:hover:text-tdark hover:text-purple-500"
              target="_blank"
              :href="project.link"
              rel="noopener noreferrer"
              title="Demo"
            >
              <span class="sr-only">Demo</span>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>
      </li>
    </ul>
    <!-- archive -->
    <div class="mt-14">
      <h2 class="text-3xl font-semibold text-center dark:text-gray-300">
        Other Noteworthy Projects
      </h2>
      <ul class="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="other in others" :key="other.name" class="px-4 py-6 space-y-4 transition ease-out transform border border-gray-900 rounded shadow-lg dark:text-gray-300 dark:bg-bdark-light hover:-translate-y-2">
          <div class="flex items-center justify-between">
            <svg class="w-6 h-6 dark:text-tdark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
            <div class="flex items-center space-x-3">
              <a
                v-if="other.git"
                :href="other.git"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
                class="transition-colors duration-200 lg:block dark:hover:text-tdark hover:text-purple-500"
              >
                <span class="sr-only">Github</span>
                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                v-if="other.link"
                :href="other.link"
                target="_blank"
                rel="noopener noreferrer"
                title="Demo"
                class="transition-colors duration-200 lg:block dark:hover:text-tdark hover:text-purple-500"
              >
                <span class="sr-only">Demo</span>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          <a :href="other.git" target="_blank" title="Demo" rel="noopener noreferrer" class="block text-lg font-semibold transition-colors duration-200 dark:hover:text-tdark hover:text-purple-600">
            {{ other.name }}
          </a>
          <p>
            {{ other.description }}
          </p>
          <div class="space-x-4 font-light">
            <span v-for="tech in other.techs" :key="tech" class="text-sm">{{ tech }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          name: 'Zingmp3 Clone',
          description: 'An online music app which is a clone of zingmp3.vn. A fully-featured app like a music player and many other things...',
          techs: ['Howler', 'Vue.js', 'TailwindCSS', 'Typescript'],
          image: '/zing.png',
          git: 'https://github.com/xiaosasori/vite-zingmp3',
          link: 'http://ec2-13-213-35-213.ap-southeast-1.compute.amazonaws.com/'
        },
        {
          name: 'Vue 3 Components',
          description: 'A showcase of my components built with Vue 3. Those are all extensible and easy to custom including DataTable, DragDrop, Slider and more!',
          techs: ['Vue.js', 'TailwindCSS', 'Vueuse', 'Histoire', 'Typescript'],
          image: '/vue_components.png',
          git: 'https://github.com/xiaosasori/my-components',
          link: 'https://xiaosasori.github.io/my-components'
        },
        {
          name: 'Discord Clone',
          description: 'A clone of the Discord web app. Implementing main features of the Discord app like chat with one another in real time, add friends, create channels, create share links to join a channel,...',
          techs: ['Vue.js', 'Vue-query', 'Pinia', 'Socket.io', 'TailwindCSS'],
          image: '/discord.png',
          git: 'https://github.com/xiaosasori/discord-clone-vite',
          link: 'https://vue-discord.herokuapp.com/'
        },
        {
          name: 'Tinyhouse Clone',
          description: 'A full-stack clone of Tinyhouse web app. This is a home-sharing app featuring authentication, data persistence, payments and deployment.',
          techs: ['Vue.js', 'TailwindCSS', 'Apollo Graphql', 'mongodb', 'typescript'],
          image: '/tinyhouse.png',
          git: 'https://github.com/xiaosasori/tinyhouse-clone',
          link: 'https://tinyhouse-vite.herokuapp.com/'
        },
        {
          name: 'WhatsApp Clone',
          description: 'A simple realtime chat application cloning of Whatsapp. Implementing fully chat features like sending text, images, voice messages, playing voice messages, creating rooms,...',
          techs: ['Vue.js', 'Firebase'],
          image: '/whatsapp.png',
          git: 'https://github.com/xiaosasori/vite-whatsapp-clone',
          link: 'https://cocky-euler-010f2d.netlify.app/'
        }
      ],
      others: [
        {
          name: 'Markdown Preview',
          description: 'Online github-like Markdown Preview ',
          techs: ['Nuxt.js', 'Github Actions', 'Markdown It'],
          git: 'https://github.com/xiaosasori/markdown-preview',
          link: 'https://xiaosasori.github.io/markdown-preview/'
        },
        {
          name: 'NuxtBnb',
          description: 'A fully functional AirBnb clone powered by Nuxt.js. Covering the basics concepts like working with Maps API, accepting payments via Credit Cards,...',
          techs: ['Nuxt.js', 'Algolia', 'Google Map Api'],
          git: 'https://github.com/xiaosasori/nuxt-bnb',
          link: ''
        },
        {
          name: 'Vue Forum',
          description: 'Realworld forum application.',
          techs: ['Vue.js', 'Firebase'],
          git: 'https://github.com/xiaosasori/vue-forum',
          link: 'https://vue-forum-1e7a0.web.app'
        },
        {
          name: 'Tailwind Templates',
          description: 'A collection of fully responsive HTML components and templates built with Tailwind CSS',
          techs: ['Nuxt.js', 'TailwindCSS'],
          git: 'https://github.com/xiaosasori/nuxt-tailwind',
          link: 'https://xiaosasori.github.io/nuxt-tailwind//coca'
        },
        {
          name: 'Batah',
          description: 'My capstone project. A system connects the lessee and the lessor as offices or coworking space from which to create a completely new ecosystem.',
          techs: ['Apollo GraphQL', 'Vue.js', 'Google Map Api', 'Paypal', 'MongoDB'],
          git: 'https://github.com/xiaosasori/batah',
          link: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.fade-in {
  animation: fade 1s ease-out;
}
@keyframes fade {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.pj:nth-child(odd) .pj-left {
    grid-column: 1 / -1;
  }
  .pj:nth-child(odd) .pj-right {
    grid-column: 1 / -1;
  }

  .pj:nth-child(even) .pj-left {
    grid-column: 1 / -1;
  }
  .pj:nth-child(even) .pj-right {
    grid-column: 1 / -1;
  }

@media only screen and (min-width: 768px){
  .pj:nth-child(odd) .pj-left {
    grid-column: 1 / 8;
  }
  .pj:nth-child(odd) .pj-right {
    grid-column: 6 / -1;
  }

  .pj:nth-child(even) .pj-left {
    grid-column: 6 / -1;
  }
  .pj:nth-child(even) .pj-right {
    grid-column: 1 / 8;
  }
}

@media only screen and (min-width: 1280px){
  .pj:nth-child(odd) .pj-left {
    grid-column: 1 / 8;
  }
  .pj:nth-child(odd) .pj-right {
    grid-column: 7 / -1;
  }

  .pj:nth-child(even) .pj-left {
    grid-column: 6 / -1;
  }
  .pj:nth-child(even) .pj-right {
    grid-column: 1 / 7;
  }
}

</style>
