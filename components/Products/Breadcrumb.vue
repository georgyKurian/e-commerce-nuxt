<template>
  <BreadCrumbs :path="productPath" />
</template>

<script setup lang="ts">
import BreadCrumbs from "../BreadCrumbs.vue";
const { t } = useI18n();

const props = defineProps<{
  product: typeof Product;
}>();

const productPath = computed(() => {
  return [
    {
      name: t("Products"),
      link: "/products",
    },
    {
      name: props.product.title,
      link: `/products/${props.product.id}`,
    },
  ];
});
</script>
