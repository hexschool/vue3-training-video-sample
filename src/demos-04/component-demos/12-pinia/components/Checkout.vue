<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '../stores/cart.js';

// 解構會失去響應性，要用 storeToRefs
// const { totalCount, totalPrice } = storeToRefs(useCartStore());
const cart = useCartStore()
</script>

<template>
  <section class="file-block" data-name="components/Checkout.vue">
    <h3>結帳</h3>
    <p>共 {{ cart.totalCount }} 件，總金額：${{ cart.totalPrice }}</p>
  </section>
</template>
