<template>
  <div class="navbar-item bc d-none d-xl-block d-lg-block py-0">
    <NuxtLink v-for="(link, idx) in navLinks" :key="idx" :to="link.Link">
      {{ link.name }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const navLinks = [
  {
    name: 'Home',
    Link: '/',
  },
  {
    name: 'Products',
    Link: '/products',
  },
  {
    name: 'Contact',
    Link: '/contact',
  },
];
</script>
