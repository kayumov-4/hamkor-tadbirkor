// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: false,
  css: ["@/assets/css/tailwind.css", "@/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@pinia/nuxt",
    "nuxt-svgo",
    "nuxt-swiper",
    "@nuxtjs/i18n",
    "@nuxt/ui",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  svgo: {
    svgo: false,
    autoImportPath: "./assets/icons/",
    componentPrefix: "icon",
  },
  i18n: {
    locales: [
      { code: "la", file: "la.json" },
      { code: "uz", file: "uz.json" },
      { code: "ru", file: "ru.json" },
    ],
    compilation: {
      strictMessage: false,
    },
    detectBrowserLanguage: false,
    langDir: "./locales",
    defaultLocale: "la",
  },
});
