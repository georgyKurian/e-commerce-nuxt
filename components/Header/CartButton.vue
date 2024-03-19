<template>
  <SfButton
    aria-label="Cart"
    class="group relative text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
    variant="tertiary"
    square
    @click="$emit('open')"
  >
    <SfIconShoppingCart />
    <SfBadge
      v-show="store.cartItemsCount > 0"
      :content="store.cartItemsCountText"
      class="outline outline-primary-700 bg-white !text-neutral-900 group-hover:outline-primary-800 group-active:outline-primary-900"
    />
  </SfButton>
</template>

<script setup lang="ts">
import { SfButton, SfIconShoppingCart, SfBadge } from "@storefront-ui/vue";

const store = useMainStore();

defineEmits(["open"]);
</script>
