<template>
  <div v-if="mainStore.cart" class="border-t border-gray-200 px-4 py-6 sm:px-6">
    <div class="flex justify-between text-base font-medium text-gray-900">
      <p>{{ $t('Sub Total') }}</p>
      <price :value="mainStore.cart.calculated.subTotal.value" />
    </div>
    <div
      v-if="mainStore.cart.calculated.discountTotal.value > 0"
      class="flex justify-between text-base font-medium text-gray-900"
    >
      <p>{{ $t('Discount') }}</p>
      <price :value="mainStore.cart.calculated.discountTotal.value" />
    </div>
    <div
      v-if="mainStore.cart.calculated.shippingSubTotal.value > 0"
      class="flex justify-between text-base font-medium text-gray-900"
    >
      <p>{{ $t('Shipping') }}</p>
      <price :value="mainStore.cart.calculated.shippingSubTotal.value" />
    </div>
    <div class="flex justify-between text-base font-medium text-gray-900">
      <p>{{ $t('Tax') }}</p>
      <price :value="mainStore.cart.calculated.taxTotal.value" />
    </div>
    <div class="flex justify-between text-base font-medium text-gray-900">
      <p>{{ $t('Total') }}</p>
      <price :value="mainStore.cart.calculated.total.value" />
      <!-- <p class="fs-6 px-3" style="color: #303e49; margin-top: -8px">
        {{ $t(`({itemsCount} items)`, { itemsCount: mainStore.cartItemsCount }) }}
      </p> -->
    </div>
  </div>
</template>

<script setup>
const mainStore = useMainStore();
</script>
