<template>
  <div class="relative max-h-[600px] flex flex-col w-full aspect-[4/3] gap-1">
    <SfScrollable
      class="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      :active-index="activeIndex"
      wrapper-class="h-full group/scrollable"
      is-active-index-centered
      :previous-disabled="activeIndex === 0"
      :next-disabled="activeIndex === props.images.length - 1"
      buttons-placement="block"
      @on-prev="activeIndex -= 1"
      @on-next="activeIndex += 1"
    >
      <template #previousButton="defaultProps">
        <SfButton
          v-bind="defaultProps"
          :disabled="activeIndex === 0"
          class="absolute hidden group-hover/scrollable:block disabled:!hidden !rounded-full !p-3 z-10 top-1/2 left-4 bg-white"
          variant="secondary"
          size="lg"
          square
        >
          <SfIconChevronLeft />
        </SfButton>
      </template>
      <div
        v-for="(image, index) in props.images"
        :key="`${image.uuid}-image`"
        class="relative flex justify-center basis-full snap-center snap-always shrink-0 grow z-0"
      >
        <img
          class="object-cover w-auto h-full"
          :aria-label="image.name"
          :aria-hidden="activeIndex !== index"
          :alt="image.name"
          :src="image.original_url"
          draggable="false"
        />
      </div>
      <template #nextButton="defaultProps">
        <SfButton
          v-bind="defaultProps"
          :disabled="activeIndex === props.images.length - 1"
          class="absolute hidden group-hover/scrollable:block disabled:!hidden !rounded-full !p-3 z-10 top-1/2 right-4 bg-white"
          variant="secondary"
          size="lg"
          square
        >
          <SfIconChevronRight />
        </SfButton>
      </template>
    </SfScrollable>
    <div class="flex-shrink-0 basis-auto">
      <div
        class="flex-row w-full flex gap-0.5 mt [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <button
          v-for="(image, index) in props.images"
          :key="`${image.uuid}-bullet`"
          :aria-current="activeIndex === index"
          :aria-label="image.name"
          :class="[
            'w-full relative mt-1 border-b-4 transition-colors focus-visible:outline focus-visible:outline-offset-0 pointer-events-none',
            activeIndex === index ? 'border-primary-700' : 'border-gray-200',
          ]"
          @click="activeIndex = index"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SfScrollable, SfButton, SfIconChevronLeft, SfIconChevronRight } from '@storefront-ui/vue';
import { ref } from 'vue';
const props = defineProps<{
  images: {
    id: number;
    uuid: string;
    name: string;
    original_url: string;
    file_name: string;
    order_column: number;
    created_at: string;
    updated_at: string;
  }[];
}>();
const withBase = (filepath: string) =>
  `https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/gallery/${filepath}`;

// const images = [
//   { imageSrc: withBase('gallery_1.png'), alt: 'backpack1' },
//   { imageSrc: withBase('gallery_2.png'), alt: 'backpack2' },
//   { imageSrc: withBase('gallery_3.png'), alt: 'backpack3' },
//   { imageSrc: withBase('gallery_4.png'), alt: 'backpack4' },
//   { imageSrc: withBase('gallery_5.png'), alt: 'backpack5' },
//   { imageSrc: withBase('gallery_6.png'), alt: 'backpack6' },
//   { imageSrc: withBase('gallery_7.png'), alt: 'backpack7' },
//   { imageSrc: withBase('gallery_8.png'), alt: 'backpack8' },
//   { imageSrc: withBase('gallery_9.png'), alt: 'backpack9' },
//   { imageSrc: withBase('gallery_10.png'), alt: 'backpack10' },
//   { imageSrc: withBase('gallery_11.png'), alt: 'backpack11' },
// ];

const activeIndex = ref(0);
</script>
