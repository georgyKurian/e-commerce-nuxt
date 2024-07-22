<template>
  <div class="container mx-auto py-4 md:py-8">
    <div class="w-full flex gap-4">
      <div class="rounded-lg bg-white border p-4 w-full md:w-1/2">
        <CheckoutBillingAddressForm v-model="billingAddress" />
      </div>
      <div class="md:shadow-lg md:rounded-md md:border md:border-neutral-100 p-4 w-full md:w-1/2">
        <CheckoutOrderSummary />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const mainStore = useMainStore();
const billingAddress = ref<typeof BillingAddress>({
  firstName: mainStore.user?.first_name,
  lastName: mainStore.user?.last_name,
  companyName: null,
  lineOne: null,
  lineTwo: null,
  lineThree: null,
  city: null,
  state: null,
  postcode: null,
  country: null,
  phone: null,
});
</script>
