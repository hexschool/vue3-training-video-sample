<script setup>
import AppNavbar from './components/AppNavbar.vue';
import ProductList from './components/ProductList.vue';
import Cart from './components/Cart.vue';
</script>

<template>
  <AppNavbar />

  <main class="layout">
    <ProductList />
    <Cart />
  </main>
</template>
