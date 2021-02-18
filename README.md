# my-blog
 A blog created with Nuxt, Storyblok and TailwindCSS
## Tailwind
- How to custom (theme)[https://tailwindcss.com/docs/theme]
- ```extend``` allows you to add your customizations while keeping TailwindCSS defaults
- Margins and widths are set outside the elements. If you check ArticleCard, it doesn't have any width or margins because it's not its job to know how it's going to be displayed in different places. ArticleCard has its inner dimensions (padding, and separation between inner elements), but how it is displayed is decided in pages/index.vue using the grid classes.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
