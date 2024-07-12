<template>
  <div>
    <div class="row mb-5">
      <div class="col6 col-xl-6 col-lg-6 col-md-12 col-sm-12 flex align-items-center justify-content-start">
        <div class="info pt-xl-0 pt-lg-0 pt-5">
          <h1 class="text-3xl font-bold font-weight-bold text-uppercase pt-3">
            {{ item.title }}
          </h1>
          <div class="flex flex-col">
            <SfRating :value="3.5" :half-increment="true" />
          </div>
          <h6 style="width: 190px">3 reviews</h6>
          <h4 class="my-4">
            <Price :value="item.variants[0].price.base.value" class="font-bold text-xl" />
          </h4>
          <Datepicker
            v-if="item.product_type_id === ProductTypeEnum.INSTRUCTOR_LED_COURSE"
            v-model="date"
            :allowed-dates="allowedDates"
            format="MMM d, yyyy"
            :enable-time-picker="false"
            auto-apply
            class="mb-2"
          />

          <ProductsQuantity v-model="quantity" />
          <SfButton class="w-full my-4" @click="addtoCart(item)">
            {{ $t('Add To Cart') }}
          </SfButton>
          <ProductsInventoryDetails :product="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfButton, SfInput, SfRating } from '@storefront-ui/vue';
import '@vuepic/vue-datepicker/dist/main.css';
import Datepicker from '@vuepic/vue-datepicker';
import ProductTypeEnum from '@/enums/ProductTypeEnum';

const mainStore = useMainStore();
const quantity = defineModel('quantity', {
  type: Number,
  default: 1,
});

defineProps<{
  item: typeof Product;
}>();

const date = ref();

const allowedDates = computed(() => {
  return [new Date(), new Date(new Date().setDate(new Date().getDate() + 1))];
});

function addtoCart(item: object) {
  for (let i = 0; i < quantity.value; i++) {
    mainStore.addToCart(item);
  }
}
function imageUrl(file: string) {
  return `/images/products/${file}`;
}
</script>

<style scoped lang="scss">
.img-fluid {
  min-width: 90% !important;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.control {
  .number {
    border: 0.2px solid lightgrey;
    font-size: 19px;
    font-weight: bold;
    height: 35px;
    width: 155px;
    margin-bottom: 30px;

    button {
      border: none;
      background: inherit;
      width: 56px;
      height: 35px;
      outline-style: none;

      &:active {
        background-color: lightgrey;
      }

      h5 {
        margin-left: 13px;
        margin-right: 13px;
      }
    }
  }
}

.add-to-cart-button {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 155px;
  height: 70px;
  background-color: #2c3539;
  color: #fff;
  font-size: 15px;
  padding: 0px 30px;
  cursor: pointer;
  position: relative;
  top: 0;
  z-index: 10;
  border: none;
  box-shadow:
    0 26px 38px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover,
  &:focus {
    background-color: inherit;
    color: black;
  }
}
</style>
