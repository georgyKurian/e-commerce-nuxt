<template>
  <Container v-if="product" class="py-5" style="padding-top: 70px">
    <!-- TODO dont allow accessing of the route to this page '/info' except if there is info to display -->
    <DetailsBreadcrumb :product="product" />
    <main>
      <div class="md:flex item-center justify-between gap-4">
        <div class="w-1/2">
          <ProductsGallery :images="product.images" />
        </div>
        <div>
          <ProductsBox :item="product" />
        </div>
      </div>
      <ProductsContent :product="product" class="my-8" />
    </main>

    <div class="related-item">
      <h6 class="text-xl font-bold mb-2">
        {{ $t('Related Products') }}
      </h6>
      <ProductsSlider :products="relatedProducts" />
    </div>
  </Container>
</template>
<script lang="ts" setup>
// const links = useBreadcrumbItems();
const productStore = useProductsStore();
const route = useRoute();
const itemId = Number(route.params.id);
let product: typeof Product = ref(null);

await useAsyncData('products.get', () => productStore.fetchProduct(itemId));

watchEffect(() => {
  product = productStore.productInfo;
});

useHead({
  name: product?.title,
  title: product?.title,
});

const quantity = ref(1);
const relatedProducts = computed(() => {
  const relatedItems = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * productStore.items.length);
    relatedItems.push(productStore.items[randomIndex]);
  }
  return relatedItems;
});
</script>
