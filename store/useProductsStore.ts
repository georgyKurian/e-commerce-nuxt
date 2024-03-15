import { defineStore } from "pinia";

const useProductsStore = defineStore("products", {
  state: (): typeof ProductStore => ({
    productInfo: {},
    items: [
      {
        id: 0,
        img: "1.jpg",
        title: "WHMIS",
        price: 2495,
        color: "yellow",
        type: "online",
      },
      {
        id: 1,
        img: "2.jpg",
        title: "Fall Protection",
        price: 5495,
        color: "yellow",
        type: "online",
      },
      {
        id: 2,
        img: "3.jpg",
        title: "TDG by Ground",
        price: 2495,
        color: "yellow",
        type: "online",
      },
      {
        id: 3,
        img: "4.jpg",
        title: "Elevating Work Platforms",
        price: 4495,
        color: "red",
        type: "online",
      },
      {
        id: 4,
        img: "5.jpg",
        title: "Camel Back",
        price: 243,
        color: "white",
        type: "sofa",
      },
      {
        id: 5,
        img: "6.jpg",
        title: "Stool",
        price: 44,
        color: "white",
        type: "chair",
      },
      {
        id: 6,
        img: "7.jpg",
        title: "Windsor chair",
        price: 505,
        color: "blue",
        type: "chair",
      },
      {
        id: 7,
        img: "8.jpg",
        title: "C-table",
        price: 432,
        color: "red",
        type: "table",
      },
      {
        id: 8,
        img: "9.jpg",
        title: "Coffee Table",
        price: 390,
        color: "white",
        type: "table",
      },
      {
        id: 9,
        img: "10.jpg",
        title: "Desk Chair",
        price: 756,
        color: "yellow",
        type: "chair",
      },
      {
        id: 10,
        img: "11.jpg",
        title: "Garden Chair",
        price: 44,
        color: "white",
        type: "chair",
      },
      {
        id: 11,
        img: "12.jpg",
        title: "Novelty",
        price: 156,
        color: "red",
        type: "lamp",
      },
      {
        id: 12,
        img: "13.jpg",
        title: "Lava",
        price: 756,
        color: "blue",
        type: "lamp",
      },
      {
        id: 13,
        img: "14.jpg",
        title: "Deck Chair",
        price: 756,
        color: "white",
        type: "chair",
      },
      {
        id: 14,
        img: "table-1.jpg",
        title: "Accent Table",
        price: 756,
        color: "white",
        type: "table",
      },
    ],
  }),
  actions: {
    addtoInfo(n: number) {
      const selectedProduct = this.items.find((item) => item.id === n);
      this.productInfo = selectedProduct!;
    },
  },
});

export default useProductsStore;
