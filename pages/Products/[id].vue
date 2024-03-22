<template>
  <Container v-if="product" class="py-5" style="padding-top: 70px">
    <!-- TODO dont allow accessing of the route to this page '/info' except if there is info to display -->
    <DetailsBreadcrumb :product="product" />
    <div class="md:flex item-center justify-between gap-4">
      <div class="w-1/2">
        <ProductsGallery :product="product" />
      </div>
      <div>
        <ProductsBox :item="product" />
      </div>
    </div>
    <DetailsText />

    <div class="related-item">
      <hr />
      <h6 class="pb-4">{{ $t("RELATED PRODUCTS") }}</h6>
      <ClientOnly>
        <ProductsSlider :products="relatedProducts" />
      </ClientOnly>
    </div>
  </Container>
</template>
<script lang="ts" setup>
// const links = useBreadcrumbItems();
const productStore = useProductsStore();
const route = useRoute();
const itemId = Number(route.params.id);
let product: typeof Product = ref(null);

product = productStore.items[itemId];

useHead({
  name: product?.title,
  title: product?.title,
});

let quantity = ref(1);
const relatedProducts = computed(() => {
  const relatedItems = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * productStore.items.length);
    relatedItems.push(productStore.items[randomIndex]);
  }
  return relatedItems;
});
</script>
