import { CartItem } from '#build/components';
import { defineStore } from 'pinia';
import type { MainStore } from '~/types/MainStore';

const useMainStore = defineStore('main', {
  state: (): MainStore => ({
    user: null,
    cart: [],
  }),
  getters: {
    isAuthenticated: ({ user }): boolean => !!user,
    cartItemsCount: ({ cart }): number => cart.length,
    cartItemsCountText: ({ cart }): string => (cart.length > 100 ? '99+' : cart.length.toString()),
    cartTotalPrice: ({ cart }): number | undefined => {
      if (cart.length !== 1) {
        const sum = cart?.reduce((acc: number, obj: any) => {
          const result = acc + obj.price;
          return result;
        }, 0);
        return sum;
      }
      return cart[0].price;
    },
  },
  actions: {
    resetData() {
      this.user = null;
      this.cart = [];
    },
    async addToCart(productVariant: typeof Product, quantity: number) {
      const client = useSanctumClient();
      try {
        const { data } = await client('api/v1/cart/add', {
          method: 'POST',
          body: { product_variant: productVariant, quantity },
        });
      } catch (e) {
        console.log('error fetch', e);
      }
    },
    removeFromCart(cartItemId: number) {
      const index = this.cart.findIndex((cartItem: typeof CartItem) => cartItem.id === cartItemId);
      return this.cart.splice(index, 1);
    },
  },
  persist: true,
});

export default useMainStore;
