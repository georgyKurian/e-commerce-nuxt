// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://vue-ecom.vercel.app',
    name: 'Worksitesafety',
    description: 'Worksitesafety storefront',
    indexable: process.env.NUXT_SITE_ENV === 'production',
  },
  sourcemap: true,
  imports: {
    dirs: ['store', 'types', 'autoImports', '@vueuse/nuxt'],
  },
  alias: {
    '~': '/<srcDir>',
    '@': '/<srcDir>',
    '~~': '/<rootDir>',
    '@@': '/<rootDir>',
    assets: fileURLToPath(new URL('./assets', import.meta.url)),
    public: '/<srcDir>/public',
    types: '/<srcDir>/types',
    images: fileURLToPath(new URL('./assets', import.meta.url)),
  },
  modules: [
    '@nuxt/devtools',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxtjs/eslint-module',
  ],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    langDir: './locales',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-CA',
        file: 'en.json',
        dir: 'ltr',
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-CA',
        file: 'fr.json',
        dir: 'ltr',
      },
    ],
  },
  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },
  routeRules: {
    '/**': { robots: 'index, follow' },
  },
  vite: {},
  plugins: [],
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },
  css: ['/assets/styles/main.scss'],
  assetsInclude: ['/assets/*/*.jpg'],
  render: {
    csp: {
      hashAlgorithm: 'sha256',
      policies: {
        'script-src': ["'self'", '*.vercel-insights.com'],
      },
      addMeta: true,
    },
  },
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  },
  sitemap: {
    sitemaps: {
      pages: {
        includeAppSources: true,
        include: ['/**'],
        exclude: ['/products/**'],
      },
      products: {
        sources: ['/api/__sitemap__/urls'],
      },
    },
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
});
