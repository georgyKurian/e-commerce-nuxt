<template>
  <div id="app">
    <SeoKit />
    <Header />
    <div id="layout" class="mx-auto">
      <slot />
    </div>
    <Newsletter v-if="route.path != '/contact'" />
    <Footer />
  </div>
</template>

<script setup>
const route = useRoute();

useHead({
  title: "V-Store",
  meta: [
    { property: "og:title", content: `V-Store - ${route.meta.title}` },
    { property: "og:image", content: "/images/jum1.jpg" },
  ],
  link: [
    {
      rel: "canonical",
      href: process.env.NUXT_PUBLIC_SITE_URL || "https://vue-ecom.vercel.app",
    },
    { rel: "icon", type: "image/x-icon", href: "/fi.ico" },
  ],
  htmlAttrs: { lang: "en-US" },
});
</script>

<style>
#app {
  background-color: #f8f8f8 !important;
  font-family: "Exo 2", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
