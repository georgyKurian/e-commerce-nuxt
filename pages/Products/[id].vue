<template>
  <Container v-if="item.product" class="py-5" style="padding-top: 70px">
    <!-- TODO dont allow accessing of the route to this page '/info' except if there is info to display -->
    <DetailsBreadcrumb :product="item.product" />
    <div class="md:flex item-center justify-between gap-4">
      <div class="w-1/2">
        <ProductsGallery :product="item.product" />
      </div>
      <div>
        <DetailsBox :item="item.product" />
      </div>
    </div>
    <DetailsText />

    <div class="related-item">
      <hr />
      <h6 class="pb-4">RELATED PRODUCTS</h6>
      <ClientOnly>
        <ProductsSlider :products="relatedProducts" />
      </ClientOnly>
    </div>
  </Container>
</template>

<script setup lang="ts">
const productStore = useProductsStore();
const route = useRoute();

interface Item {
  product: typeof Product;
  relatedItems: (typeof Product)[];
}

const item = reactive({
  product: null,
  relatedItems: [],
});

onMounted(() => {
  let itemId = Number(route.params.id);
  item.product = productStore.items[itemId];
});

const quantity = ref(1);
const relatedProducts = computed(() => {
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * productStore.items.length);
    item.relatedItems.push(productStore.items[randomIndex]);
  }
  return item.relatedItems;
});
</script>
