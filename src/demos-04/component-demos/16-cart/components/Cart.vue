<script setup>
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
</script>

<template>
  <div class="cart">
    <div
      v-if="cartStore.cart.length === 0"
      class="empty-cart"
    >
      購物車目前沒有商品
    </div>

    <div
      v-for="item in cartStore.cart"
      :key="item.id"
      class="cart-item"
    >
      <button
        class="remove"
        @click="cartStore.removeCart(item.id)"
      >
        ×
      </button>

      <img
        :src="item.image"
        :alt="item.name"
      />

      <div class="cart-info">
        <h4>{{ item.name }}</h4>
        <span>NT$ {{ item.price }}</span>
      </div>

      <select v-model="item.qty">
        <option
          v-for="qty in 10"
          :key="qty"
          :value="qty"
        >
          {{ qty }}
        </option>
      </select>

      <strong>
        NT$ {{ item.price * item.qty }}
      </strong>
    </div>

    <div
      v-if="cartStore.cart.length"
      class="cart-total"
    >
      總金額 NT$ {{ cartStore.totalPrice }}
    </div>
  </div>
</template>
