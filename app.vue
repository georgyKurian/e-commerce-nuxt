<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const mainStore = useMainStore();
const sanctumUser = useSanctumUser();
onServerPrefetch(async () => {
  mainStore.fetchCart();
  mainStore.user = sanctumUser.value;
});
onBeforeMount(async () => {
  mainStore.fetchCart();
  mainStore.user = sanctumUser.value;
});

// Watch for changes in sanctumUser and update store.user accordingly
watch(
  sanctumUser,
  async (newValue) => {
    mainStore.user = newValue;
    mainStore.fetchCart();
  },
  { deep: true },
);
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
