import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  typescript: {
    strict: true,
  },
  modules: ['@vueuse/nuxt', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
    },
  },
})
