<template>
  <div class="container mx-auto py-4 md:py-8">
    <div class="">
      <div v-if="grid.cards.length !== 0" class="flex flex-row py-3">
        <ProductsFilterBar class="w-3/12 mr-2 md:block" />

        <div class="mx-auto">
          <ProductsList :product-list="slicedCards" />
          <ProductsMoreButton
            v-if="grid.cards.length !== 0"
            @increment-cards="grid.showCards += 6"
          />
        </div>
      </div>
      <Notification v-else class="my-5 py-5">
        <h4>{{ $t("Sorry, we can't find any product with this features") }}</h4>
      </Notification>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

useHead({
  title: t("Shop"),
  link: [{ rel: "canonical", href: "https://vue-ecom.vercel.app/products" }],
});
const props = defineProps({
  category: String,
});
const store = useProductsStore();

const grid = reactive({
  cards: [],
  showCards: 6,
});

onMounted(() => reSet());
const reSet = () => {
  if (props.category) {
    grid.cards = store.items.filter((item) => item.type == props.category);
  } else {
    grid.cards = store.items;
  }
};
const slicedCards = computed(() => grid.cards.slice(0, grid.showCards));

const sortItems = (value) => {
  grid.cards.sort((a, b) => {
    if (value === "newset") return a.title.length * 2 - b.title.length * 4;
    if (value === "price") return a.price - b.price;
    if (value === "trending") return a.type.length - b.type.length;
  });
  return (grid.sortButton = value.toUpperCase());
};
</script>
