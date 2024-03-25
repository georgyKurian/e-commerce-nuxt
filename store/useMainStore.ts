import { CartItem } from '#build/components';
import { defineStore } from 'pinia';
import { MainStore, Product } from '~/types/types';

interface CartItem {
  product: Product;
  quantity: number;
  declaration: boolean;
  global: boolean;
}

const useMainStore = defineStore('main', {
  state: (): MainStore => ({
    user: null,
    cart: [],
  }),
  getters: {
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
    addToCart(item: typeof CartItem) {
      return this.cart.push(item);
    },
    removeFromCart(cartItemId: number) {
      const index = this.cart.findIndex((cartItem: typeof CartItem) => cartItem.id === cartItemId);
      return this.cart.splice(index, 1);
    },
  },
});

export default useMainStore;
