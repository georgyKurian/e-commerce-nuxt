import { defineStore } from "pinia";
import { MainStore, Product } from "~/types/types";

interface CartItem {
  product: Product;
  quantity: number;
  declaration: boolean;
  global: boolean;
}

const useMainStore = defineStore("main", {
  state: (): MainStore => ({
    user: null,
    cart: [],
  }),
  getters: {
    cartItemsCount: ({ cart }): number => cart.length,
    cartTotalPrice: ({ cart }): number | undefined => {
      if (cart.length !== 1) {
        const sum = cart?.reduce((acc: number, obj: any) => {
          let result = acc + obj.price;
          return result;
        }, 0);
        return sum;
      }
      return cart[0].price;
    },
  },
  actions: {
    addToCart(n: object) {
      return this.cart.push(n);
    },
    removeFromCart(n: number) {
      let index = this.cart.findIndex((x) => x.id === n);
      return this.cart.splice(index, 1);
    },
  },
});

export default useMainStore;
