<script setup>
import ProductList from '../components/ProductList.vue'
</script>

<template>
  <div class="file-block" data-name="views/ParentView.vue">
    <!-- 用 slotProps 接收 -->
    <ProductList>
      <template #item="slotProps">
        {{ slotProps }}
        <p>
          {{ slotProps.product.name }} - ${{ slotProps.product.price }}
        </p>
      </template>
    </ProductList>

    <!-- 直接解構 -->
    <ProductList>
      <template #item="{ product }">
        {{ product }}
        <p>
          {{ product.name }}
          - ${{ product.price }}
        </p>
      </template>
    </ProductList>

    <!-- 同一份資料，改成卡片 -->
    <ProductList>
      <template #item="{ product }">
        <div class="card">
          <h3>{{ product.name }}</h3>
          <p>${{ product.price }}</p>
        </div>
      </template>
    </ProductList>
  </div>
</template>
