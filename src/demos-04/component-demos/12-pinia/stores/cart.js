import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  // state：購物車商品
  state: () => ({
    items: [],
  }),

  // getters：由 state 算出的衍生資料
  getters: {
    totalCount: (state) => state.items.reduce((sum, item) => sum + item.qty, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.qty, 0),
  },

  // actions：修改 state 的操作
  actions: {
    addToCart(product) {
      const item = this.items.find((item) => item.id === product.id);

      if (item) {
        item.qty++;
      } else {
        this.items.push({ ...product, qty: 1 });
      }
    },
  },
});
