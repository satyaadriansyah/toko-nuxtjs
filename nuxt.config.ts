// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true },
    '/api/*': { cache: { maxAge: 60 * 60 } },
  },
  modules: ["@hebilicious/vue-query-nuxt"],
  app: {
    head: {
      title: 'Toko NUXT-JS',
      meta: [{
        name: 'description',
        content: 'Lab Ngoding pakai NuxtJS'
      },{
        property: 'og:type',
        content: 'website'
      },{
        property: 'og:description',
        content: 'Lab Ngoding pakai NuxtJS'
      },{
        property: 'og:title',
        content: 'Toko NUXT-JS'
      }],
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },  
})
