<template>
  <main>
    <HomeCarousel />
    <Container class="py-4">
      <h2
        class="mb-4 text-lg font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white"
      >
        Our Valued Clients
      </h2>
      <HomeClientCarousel />
    </Container>
  </main>
</template>

<script setup>
definePageMeta({
  title: 'Home',
});
</script>
