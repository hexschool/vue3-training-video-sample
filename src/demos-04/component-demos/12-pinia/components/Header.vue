<script setup>
import { useCartStore } from '../stores/cart.js';

const cart = useCartStore();
</script>

<template>
  <header class="file-block" data-name="components/Header.vue">
    <strong>我的商店</strong>
    <span>🛒 {{ cart.totalCount }}</span>
  </header>
</template>
