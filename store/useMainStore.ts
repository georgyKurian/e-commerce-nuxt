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
    async fetchUser() {
      const { data } = await useQualifyAPI('api/v1/user', { method: 'GET' });

      if (data?.value?.data) {
        this.user = data.value.data;
        return true;
      }
      return false;
    },
    async login(email: string, password: string) {},
    async logout() {
      debugger;
      const { status } = await useQualifyAPI('logout', { method: 'POST' });

      if (status?.value === 'success') {
        this.$reset();
        return true;
      }
      return false;
    },
    resetData() {
      this.user = null;
      this.cart = [];
    },
    addToCart(item: typeof CartItem) {
      return this.cart.push(item);
    },
    removeFromCart(cartItemId: number) {
      const index = this.cart.findIndex((cartItem: typeof CartItem) => cartItem.id === cartItemId);
      return this.cart.splice(index, 1);
    },
  },
  persist: true,
});

export default useMainStore;
