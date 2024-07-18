import { CartItem } from '#build/components';
import { defineStore } from 'pinia';
import type { MainStore } from '~/types/MainStore';

const useMainStore = defineStore('main', {
  state: (): MainStore => ({
    user: null,
    cart: null,
  }),
  getters: {
    isAuthenticated: ({ user }): boolean => !!user,
    cartItemsCount: ({ cart }): number => cart?.lines?.reduce((acc, line) => (acc += line.quantity), 0),
  },
  actions: {
    resetData() {
      this.user = null;
      this.cart = null;
    },
    async fetchCart() {
      const client = useSanctumClient();
      try {
        const { data } = await client('api/v1/cart', {
          method: 'GET',
        });
        this.cart = data;
      } catch (e) {
        console.log('error fetch', e);
      }
    },
    async addToCart(productVariant: typeof Product, quantity: number) {
      const client = useSanctumClient();
      try {
        const { data } = await client('api/v1/cart/add', {
          method: 'POST',
          body: { product_variant: productVariant, quantity },
        });
        this.cart = data;
      } catch (e) {
        console.log('error fetch', e);
      }
    },
    async removeFromCart(cartLine: typeof CartItem) {
      const client = useSanctumClient();
      try {
        const { data } = await client('api/v1/cart/remove', {
          method: 'POST',
          body: { cart_line_id: cartLine.id },
        });
        this.cart = data;
        debugger;
      } catch (e) {
        console.log('error fetch', e);
      }
    },
  },
  persist: true,
});

export default useMainStore;
