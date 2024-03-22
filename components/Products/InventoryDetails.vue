<template>
  <div class="w-full bg-gray-300 rounded p-2">
    <ul>
      <li>
        <template v-if="product.inStock">
          <SfIconCheck class="text-green-600" aria-label="Available" />
          <span>{{ $t("In Stock Online") }}</span>
        </template>
        <template v-else>
          <SfIconClose class="text-red-600" aria-label="Not available" />
          <span>{{ $t("Out of Stock Online") }}</span>
        </template>
      </li>
      <li>
        <SfIconCheck class="text-green-600" aria-label="Available" />
        <span>{{ $t("Store details") }}</span>
      </li>
    </ul>
    <SfSelect
      v-if="product.stores?.length > 1"
      class="w-full mt-2"
      :label="$t('Select Store')"
      v-model="selectedLocation"
      :placeholder="$t('-Select store-')"
    >
      <option v-for="store in product.stores" :key="store.id" :value="store.id">
        {{ `${store?.address?.city}, store?.address?.province` }}
      </option>
    </SfSelect>
  </div>
</template>
<script setup lang="ts">
import { SfIconCheck, SfIconClose, SfSelect } from "@storefront-ui/vue";

const selectedLocation = ref();

defineProps<{
  product: typeof Product;
}>();
</script>
