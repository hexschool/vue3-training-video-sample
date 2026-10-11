import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);

  const addCart = (product) => {
    const item = cart.value.find(
      (item) => item.id === product.id
    );

    if (item) {
      item.qty++;
      return;
    }

    cart.value.push({
      ...product,
      qty: 1
    });
  };

  const removeCart = (id) => {
    const index = cart.value.findIndex(
      (item) => item.id === id
    );

    if (index !== -1) {
      cart.value.splice(index, 1);
    }
  };

  const totalPrice = computed(() => {
    return cart.value.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0);
  });

  const cartCount = computed(() => {
    return cart.value.reduce((total, item) => {
      return total + item.qty;
    }, 0);
  });

  return {
    cart,
    addCart,
    removeCart,
    totalPrice,
    cartCount
  };
});
