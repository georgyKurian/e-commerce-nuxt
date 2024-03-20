// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  sourcemap: true,
  imports: {
    dirs: ["store", "types", "autoImports", "@vueuse/nuxt"],
  },
  alias: {
    "~": "/<srcDir>",
    "@": "/<srcDir>",
    "~~": "/<rootDir>",
    "@@": "/<rootDir>",
    assets: fileURLToPath(new URL("./assets", import.meta.url)),
    public: "/<srcDir>/public",
    types: "/<srcDir>/types",
    images: fileURLToPath(new URL("./assets", import.meta.url)),
  },
  modules: [
    "@nuxt/devtools",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    langDir: "./locales",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-CA",
        file: "en.json",
        dir: "ltr",
      },
      {
        code: "fr",
        name: "Français",
        iso: "fr-CA",
        file: "fr.json",
        dir: "ltr",
      },
    ],
  },
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
  extends: ["nuxt-seo-kit"],
  routeRules: {
    "/**": { robots: "index, follow" },
  },
  vite: {},
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || "https://vue-ecom.vercel.app",
      siteName: "V-Store",
      siteDescription:
        "A Full StoreFront built with Nuxt 3 + Pinia 2 + Bootstrap 5....",
      language: "en-US",
    },
  },
  plugins: [],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  css: ["/assets/styles/main.scss"],
  assetsInclude: ["/assets/*/*.jpg"],
  render: {
    csp: {
      hashAlgorithm: "sha256",
      policies: {
        "script-src": ["'self'", "*.vercel-insights.com"],
      },
      addMeta: true,
    },
  },
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  },
});
