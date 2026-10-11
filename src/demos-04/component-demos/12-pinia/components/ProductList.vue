<script setup>
import { useCartStore } from '../stores/cart.js';

const cart = useCartStore();

const products = [
  { id: 1, name: '咖啡豆', price: 450 },
  { id: 2, name: '濾杯', price: 680 },
  { id: 3, name: '手沖壺', price: 1200 },
];
</script>

<template>
  <section class="file-block" data-name="components/ProductList.vue">
    <h3>商品列表</h3>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}：${{ product.price }}
        <!-- 直接呼叫 Store 的 action，不需要 emit -->
        <button @click="cart.addToCart(product)">加入購物車</button>
      </li>
    </ul>
  </section>
</template>
