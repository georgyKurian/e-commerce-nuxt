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
  imports: {
    dirs: ["store", "types"],
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
  modules: ["@nuxt/devtools", "@pinia/nuxt"],
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
});
