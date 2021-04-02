
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Minh Anh',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Minh Anh is a software engineer who specializes in building web app with Vue. He\'s based in Osaka, Japan' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap', rel: 'stylesheet' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/css/tailwind.css', lang: 'css' },
    { src: '~/assets/css/markdown.css', lang: 'css' },
    { src: 'prismjs/themes/prism.css', lang: 'css' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/prism-nuxt.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  // https://tailwindcss.nuxtjs.org/setup
  tailwindcss: {
    jit: true
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_KEY,
        cacheProvider: 'memory'
      }
    ],
    ['@nuxtjs/markdownit']
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-prism',
      'markdown-it-anchor'
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {},
  // Generate dynamic route for ssr
  // generate: {
  //   routes () {
  //     return axios.get(`https://api.storyblok.com/v1/cdn/stories&version=published&token=${process.env.STORYBLOK_KEY}&starts_with=blog&cv=${Math.floor(Date.now() / 1e3)}`)
  //       .then((res) => {
  //         const blogPosts = res.data.stories.map(bp => bp.full_slug)
  //         return ['/', '/blog', '/about', ...blogPosts]
  //       })
  //   }
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
