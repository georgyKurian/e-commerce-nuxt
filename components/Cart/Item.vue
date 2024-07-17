<template>
  <li class="flex py-6">
    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <SfLink :href="`/products/${product.id}`" :tag="NuxtLink" class="block">
        <NuxtImg
          :src="product.thumbnail.original_url"
          alt="Great product"
          class="h-full w-full object-cover object-center"
          width="100"
          height="100"
          loading="lazy"
        />
      </SfLink>
    </div>

    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href="#">{{ product.attribute_data?.name?.en }}</a>
          </h3>
          <p class="ml-4"><price :value="productVariant.price.base?.value" /></p>
        </div>
        <p class="mt-1 text-sm text-gray-500"></p>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm">
        <p class="text-gray-500">Qty {{ props.item.quantity }}</p>

        <div class="flex">
          <button type="button" class="remove-btn font-medium" @click="mainStore.removeFromCart(item.id as number)">
            Remove
          </button>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
const mainStore = useMainStore();

const props = defineProps<{
  item: typeof Product;
}>();

const product = computed(() => {
  return props.item.purchasable.product;
});

const productVariant = computed(() => {
  return props.item.purchasable;
});
</script>

<style scoped lang="scss">
.remove-btn {
  border-radius: 50%;
  content: url('.~/assets/multiply.png');

  :hover {
    background-color: grey;
  }
}
</style>
