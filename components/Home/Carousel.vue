<template>
  <Container class="my-4 lg:gap-6 lg:flex-no-wrap grid grid-cols-1 md:grid-cols-3 gap-4">
    <a
      v-for="{ title, link } in categories"
      :key="title"
      :href="link"
      :aria-label="title"
      class="flex-col group bg-neutral-900 dark:bg-neutral-100 h-20 md:h-64 w-full flex justify-center items-center focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md text-center"
    >
      <span
        class="text-center text-white dark:text-black font-semibold text-2xl group-hover:shadow-xl group-active:shadow-none"
      >
        {{ title }}
      </span>
    </a>
  </Container>
</template>

<script setup lang="ts">
const categories = [
  {
    title: `Online Certifications`,
    image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/women_category.png',
    link: '/category/online',
  },
  {
    title: `Classroom courses`,
    image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/men_category.png',
    link: '/category/in-class',
  },
  {
    title: `Health & Safety Consulting`,
    image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/kid_category.png',
    link: '/category/consulting',
  },
];
</script>

<style scoped>
.img-fluid {
  min-width: 800px !important;
}

.carousel-indicators button {
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  border: 0.6px solid rgb(129, 127, 127);
}

.carousel-indicators > .active {
  background: #e0f0f8;
}
</style>
