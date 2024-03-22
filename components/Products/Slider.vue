<template>
  <SfScrollable
    class="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    buttons-placement="floating"
    drag
  >
    <template #previousButton="defaultProps">
      <SfButton
        v-bind="defaultProps"
        class="absolute !rounded-full z-10 left-4 bg-white hidden md:block"
        :class="{ '!hidden': defaultProps.disabled }"
        variant="secondary"
        size="lg"
        square
      >
        <SfIconChevronLeft />
      </SfButton>
    </template>
    <ProductsCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <template #nextButton="defaultProps">
      <SfButton
        v-bind="defaultProps"
        class="absolute !rounded-full z-10 right-4 bg-white hidden md:block"
        :class="{ '!hidden': defaultProps.disabled }"
        variant="secondary"
        size="lg"
        square
      >
        <SfIconChevronRight />
      </SfButton>
    </template>
  </SfScrollable>
</template>

<script lang="ts" setup>
import {
  SfButton,
  SfIconFavorite,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfScrollable,
} from "@storefront-ui/vue";

defineProps<{
  products: (typeof Product)[];
}>();
</script>
