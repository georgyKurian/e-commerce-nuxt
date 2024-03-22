<template>
  <span class="">${{ formattedAmount }}</span>
</template>
<script lang="ts" setup>
const props = defineProps<{
  value: number;
}>();

const formattedAmount = computed(() => {
  const dollar = (props.value / 100).toFixed(2);
  return dollar.toLocaleString('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });
});
</script>
