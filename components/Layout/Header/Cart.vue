<template>
  <div>
    <div :class="['cart', props.isOpen ? 'on' : '']">
      <div class="cart-menu">
        <p class="text-center mt-4 pb-2 h3">Cart</p>
        <hr class="border-gray-200" />
        <Notification v-if="!mainStore.cartItemsCount">
          {{ $t('Your cart is empty, try to Add stuff.') }}
        </Notification>
        <ul v-for="item in mainStore.cart?.lines" :key="item.id" role="list" class="divide-y divide-gray-200">
          <CartItem :item="item" />
        </ul>

        <div v-if="mainStore.cartItemsCount">
          <hr class="border-gray-200" />
          <CartTotal />
        </div>
      </div>
    </div>
    <div :class="['modal', props.isOpen ? '' : 'off']" @click="$emit('closeCart')" />
  </div>
</template>

<script setup lang="ts">
const mainStore = useMainStore();

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
/* Modal Overlay */
.modal {
  display: block;
  z-index: 1050;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

.modal.off {
  display: none;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Cart Body */
.cart {
  position: fixed;
  margin-right: 0px;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background: white;
  overflow-y: auto;
  z-index: 1051;
  -webkit-overflow-scrolling: touch;
  transform: translateX(360px);
  transition-property: transform;
  transition-duration: 0.4s;
}

.cart.on {
  transform: translateX(0);
  -webkit-overflow-scrolling: touch;
  transition-property: transform;
  transition-duration: 0.4s;
}

.cart-menu {
  color: #000000;
  margin-left: 10px;
  margin-right: 15px;
}

.row {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
