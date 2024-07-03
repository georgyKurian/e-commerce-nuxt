import { defineStore } from 'pinia';

const useProductsStore = defineStore('products', {
  state: (): typeof ProductStore => {
    const { data, pending } = useQualifyAPI('api/v1/products');
    return {
      productInfo: {},
      isFetching: pending,
      items: data?.value?.data ?? [],
    };
  },
  actions: {
    async fetchProducts() {
      const { data, pending } = await useQualifyAPI('api/v1/products');
      this.isFetching = pending;
      if (data.value?.data) this.items = data.value.data;
    },
    async fetchProduct(id: number) {
      this.productInfo = this.items[id] ?? {};
      const { data, pending } = await useQualifyAPI('api/v1/products/' + id);
      this.isFetching = pending;
      if (data.value?.data) this.productInfo = data.value.data;
    },
    addtoInfo(n: number) {
      const selectedProduct = this.items.find((item) => item.id === n);
      this.productInfo = selectedProduct!;
    },
  },
});

export default useProductsStore;
