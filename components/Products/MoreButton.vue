<template>
  <SfButton
    type="button"
    variant="secondary"
    @click="$emit('incrementCards')"
    class="w-full"
    >More +</SfButton
  >
</template>
<script setup lang="ts">
import { SfButton } from "@storefront-ui/vue";

defineEmits<{
  (e: "incrementCards"): void;
}>();
</script>
