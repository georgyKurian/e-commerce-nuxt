<template>
  <div class="row align-items-center p-2" style="background: #7dcf85">
    <div class="col pl-3 pt-3">
      <h4>Subtotal</h4>
      <p class="fs-6 px-3" style="color: #303e49; margin-top: -8px">
        {{ `(${store.cartItemsCount} items)` }}
      </p>
    </div>
    <div class="col text-center pr-3">
      <h4><price :value="store.cartTotalPrice" /></h4>
    </div>
  </div>
</template>

<script setup>
const store = useMainStore();
</script>
