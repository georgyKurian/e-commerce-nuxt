<template>
  <SfScrollable
    class="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory"
    :active-index="activeIndex"
    wrapper-class="min-w-0"
    buttons-placement="none"
    :is-active-index-centered="true"
    :drag="true"
  >
    <div v-for="(client, index) in clients" :key="index">
      <NuxtImg
        :src="`/images/clients/${client.image}`"
        :alt="`${client.name}`"
        :title="`${client.name}`"
        :aria-label="`${client.name} Logo`"
        fit="cover"
        format="webp"
        class="w-full h-full"
      />
    </div>
  </SfScrollable>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfScrollable } from '@storefront-ui/vue';

const clients = [
  { image: 'ahs.webp', name: 'Alberta Health Service' },
  { image: 'amazon.webp', name: 'Amazon' },
  { image: 'bulkbarn.webp', name: 'Bulkbarn' },
  { image: 'city-nelson.webp', name: 'City Nelson' },
  { image: 'govsask.webp', name: 'Government of Saskatchewan' },
  { image: 'hpl.webp', name: 'Hamilton Public Library' },
  { image: 'molson-coors.webp', name: 'Molson Coors' },
  { image: 'rcmp-crest.webp', name: 'RCMP Crest' },
  { image: 'Suncor.webp', name: 'Suncor' },
  { image: 'tdsb.webp', name: 'Toronto District School Board' },
  { image: 'vancomcoll.webp', name: 'Vancover Community College' },
  { image: 'viha.webp', name: 'Vancover Island Health Authority' },
];

const itemsLength = clients.length;
const activeIndex = ref(0);

onMounted(() => {
  setInterval(() => (activeIndex.value = (activeIndex.value + 1) % itemsLength), 2000);
});
</script>
