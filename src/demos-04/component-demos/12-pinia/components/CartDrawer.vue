<script setup>
import { useCartStore } from '../stores/cart.js';

const cart = useCartStore();
</script>

<template>
  <section class="file-block" data-name="components/CartDrawer.vue">
    <h3>購物車內容</h3>
    <p v-if="!cart.items.length">購物車是空的</p>
    <ul v-else>
      <li v-for="item in cart.items" :key="item.id">
        {{ item.name }} × {{ item.qty }}
      </li>
    </ul>
  </section>
</template>
