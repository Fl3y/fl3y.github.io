// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    baseURL: "/fl3y.github.io/",
  },
  runtimeConfig: {
    apiSecret: "1",
  },

  modules: ["@nuxtjs/tailwindcss"],
});
