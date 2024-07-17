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
  mainStore.user = sanctumUser;
});
onBeforeMount(async () => {
  mainStore.fetchCart();
  mainStore.user = sanctumUser;
});

watch(
  mainStore.user,
  async () => {
    await mainStore.fetchCart();
  },
  { deep: true },
);

// Watch for changes in sanctumUser and update store.user accordingly
watch(
  sanctumUser,
  (newValue) => {
    mainStore.user = newValue;
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
