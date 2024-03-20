<template>
  <Container class="py-5" style="padding-top: 70px">
    <!-- TODO dont allow accessing of the route to this page '/info' except if there is info to display -->

    <h1 class="text-4xl capitalize">{{ category }}</h1>
    <ProductsBreadCrumbs />
    <ProductsGrid :category="category" />
  </Container>
</template>

<script setup lang="ts">
const route = useRoute();
const category = computed((): String => {
  return String(route.params.category);
});
</script>

<style scoped>
hr {
  width: 50px;
  border-bottom: 1px solid black;
}

.related-item {
  padding-left: 8rem;
  padding-right: 8rem;
  height: auto;
  text-align: center;
}
</style>
