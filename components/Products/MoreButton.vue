<template>
  <SfButton type="button" variant="secondary" class="w-full" @click="$emit('incrementCards')"> More + </SfButton>
</template>
<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';

defineEmits<{
  (e: 'incrementCards'): void;
}>();
</script>
