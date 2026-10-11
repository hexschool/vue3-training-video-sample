<script setup>
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
</script>

<template>
  <nav class="navbar">
    <a href="#" class="logo">
      香香麵攤
    </a>

    <div class="cart-link">
      購物車

      <span
        v-if="cartStore.cartCount"
        class="badge"
      >
        {{ cartStore.cartCount }}
      </span>
    </div>
  </nav>
</template>
