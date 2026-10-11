<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="file-block" data-name="views/ProductsView.vue">
    <h1>商品列表</h1>
    <p>page：{{ route.query.page }}，keyword：{{ route.query.keyword }}</p>
  </div>
</template>
