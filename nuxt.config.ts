import { defineNuxtConfig } from 'nuxt'


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  css: ['@/assets/css/main.css', '@/assets/css/main.scss'],
  modules: ['@intlify/nuxt3'],
  intlify: {
    vueI18n: {
      locale: 'fr',
    }
  }
})
