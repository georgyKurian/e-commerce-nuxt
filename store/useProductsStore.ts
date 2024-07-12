import { defineStore } from 'pinia';
const useProductsStore = defineStore('products', {
  state: (): typeof ProductStore => {
    return {
      productInfo: {},
      isFetching: false,
      items: [],
    };
  },
  actions: {
    async fetchProducts() {
      const client = useSanctumClient();
      try {
        const { data } = await client('api/v1/products');
        if (data) this.items = data;
      } catch (e) {
        console.log('error fetch', e);
      }
      // this.isFetching = pending;
      //if (data.value?.data) this.items = data.value.data;
    },
    async fetchProduct(id: number) {
      this.productInfo = this.items[id] ?? {};
      const { data, pending } = await useQualifyAPI('api/v1/products/' + id);
      this.isFetching = pending;
      if (data.value?.data) this.productInfo = data.value.data;
      return this.productInfo;
    },
    addtoInfo(n: number) {
      const selectedProduct = this.items.find((item) => item.id === n);
      this.productInfo = selectedProduct!;
    },
  },
});

export default useProductsStore;
