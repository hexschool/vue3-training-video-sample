<script setup>
const products = [
  { id: 1, name: '鍵盤', price: 1200 },
  { id: 2, name: '滑鼠', price: 800 }
]
</script>

<template>
  <div class="file-block" data-name="components/ProductList.vue">
    <slot
      name="item"
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
