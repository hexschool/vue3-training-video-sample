import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  // state：購物車商品
  const items = ref([]);

  // getters：由 state 算出的衍生資料
  const totalCount = computed(() => items.value.reduce((sum, item) => sum + item.qty, 0));
  const totalPrice = computed(() => items.value.reduce((sum, item) => sum + item.price * item.qty, 0));

  // actions：修改 state 的操作
  const addToCart = (product) => {
    console.log('product', product)
    const item = items.value.find((item) => item.id === product.id);

    if (item) {
      item.qty++;
    } else {
      items.value.push({ ...product, qty: 1 });
    }
  };

  return {
    items,
    totalCount,
    totalPrice,
    addToCart,
  };
});
