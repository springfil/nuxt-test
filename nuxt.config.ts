// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },
  css:[
    '@/assets/css/global.css'
  ],
  app: {
    head: {
      title: 'Rick & Morty',
      meta: [
        {name: 'description', content: 'cartoon about adventures'}
      ],
    }
  },
})
