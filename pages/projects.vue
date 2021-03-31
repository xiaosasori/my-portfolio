<template>
  <div class="max-w-5xl pt-10 pb-8 mx-auto lg:w-4/5 w-11/12 sm:w-4/5">
    <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-gray-300">
      Some Things I've Built
    </h2>
    <ul class="mt-10 space-y-8 lg:space-y-24">
      <li v-for="(project, index) in projects" :key="project.name" class="fade-in grid grid-cols-12 pj">
        <div class="relative pj-left" style="grid-row: 1 / 1">
          <div style="padding-bottom:62.2857%">
            <div class="absolute inset-0 overflow-hidden rounded-lg">
              <img class="w-full h-full ml-auto" :src="project.image" :alt="project.name">
            </div>
          </div>
        </div>
        <div style="grid-row: 1 / 1" class="flex flex-col z-10 md:z-0 justify-center p-8 text-white dark:text-gray-300 bg-gray-900 rounded bg-opacity-90 md:bg-transparent md:p-0 md:text-gray-900 pj-right" :class="[index % 2 === 0 ? 'md:text-right' : 'md:text-left']">
          <p class="text-sm font-semibold dark:text-tdark">
            Feature Project
          </p>
          <h3 class="text-lg font-semibold">
            {{ project.name }}
          </h3>
          <div class="p-4 mt-4 border z-10 rounded dark:md:bg-bdark-light dark:md:border-none md:bg-white md:border-gray-900">
            <p>{{ project.description }}</p>
          </div>
          <div class="mt-4 space-x-4 lg:text-gray-900 font-light dark:text-gray-300">
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
      <h2 class="dark:text-gray-300 text-3xl font-semibold text-center">
        Other Noteworthy Projects
      </h2>
      <ul class="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="other in others" :key="other.name" class="dark:text-gray-300 px-4 py-6 space-y-4 dark:bg-bdark-light transition ease-out transform border border-gray-900 rounded shadow-lg hover:-translate-y-2">
          <div class="flex items-center justify-between">
            <svg class="dark:text-tdark w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
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
          <a :href="other.link" target="_blank" title="Demo" rel="noopener noreferrer" class="block text-lg font-semibold transition-colors duration-200 dark:hover:text-tdark hover:text-purple-600">
            {{ other.name }}
          </a>
          <p class="">
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
          name: 'NuxtBnb',
          description: 'A fully functional AirBnb clone powered by Nuxt.js. Covering the basics and advanced concepts like working with Maps API, accepting payments via Credit Cards, implementing date pickers, advanced search functionality, and many more!',
          techs: ['Nuxt.js', 'Algolia', 'Google Map Api'],
          image: '/nuxtbnb.jpg',
          git: 'https://github.com/xiaosasori',
          link: 'https://github.com/xiaosasori'
        },
        {
          name: 'Vue 3 Components',
          description: 'A showcase of my components built with Vue 3. Those are all extensible and easy to custom including DataTable, DragDrop, Slider and more!',
          techs: ['Vue.js', 'Storybook'],
          image: '/vue_components.png',
          git: 'https://github.com/xiaosasori/my-vue-components',
          link: 'https://xiaosasori.github.io/my-vue-components/?path=/story/datatable-sample--sample'
        },
        {
          name: 'Tailwind Templates',
          description: 'A collection of fully responsive HTML components and templates built with Tailwind CSS',
          techs: ['Nuxt.js', 'TailwindCSS'],
          image: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="nature',
          git: 'https://github.com/xiaosasori',
          link: 'https://github.com/xiaosasori'
        }
      ],
      others: [
        {
          name: 'Markdown Preview',
          description: 'Online Github-like Markdown Preview ',
          techs: ['Nuxt.js', 'Github Actions', 'Markdown It'],
          git: 'https://github.com/xiaosasori/markdown-preview',
          link: 'https://xiaosasori.github.io/markdown-preview/'
        },
        {
          name: 'Simple Chat',
          description: 'A simple Google Keep clone built with Vue and Firebase',
          techs: ['Vue.js', 'Go'],
          git: 'https://github.com/xiaosasori',
          link: 'https://github.com/xiaosasori'
        },
        {
          name: 'Vue Forum',
          description: 'Realworld forum application.',
          techs: ['Vue.js', 'Firebase'],
          git: 'https://github.com/xiaosasori',
          link: 'https://github.com/xiaosasori'
        },
        {
          name: 'Batah',
          description: 'My capstone project. A system connects the lessee and the lessor as offices or coworking space from which to create a completely new ecosystem.',
          techs: ['Apollo GraphQL', 'Vue.js', 'Google Map Api', 'Paypal', 'MongoDB'],
          git: 'https://github.com/xiaosasori',
          link: 'https://github.com/xiaosasori'
        },
        {
          name: 'VueVue',
          description: 'Simple image-sharing social application similar to Pinterest or Instagram. Authenticated users will be able to like and unlike, share, comment on, search for, edit, and delete image-related posts.',
          techs: ['Vue.js', 'Vuetify', 'Apollo GraphQL', 'MongoDB'],
          git: 'https://github.com/xiaosasori',
          link: 'https://github.com/xiaosasori'
        },
        {
          name: 'Vue Ecommerce Demo',
          description: 'A simple ecommerce app',
          techs: ['Vue.js', 'Firebase'],
          git: 'https://github.com/xiaosasori/vue-shop',
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
