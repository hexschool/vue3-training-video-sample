<script setup>
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();

// 講義的圖片是 /images/product-1.jpg～6.jpg，這裡先用 picsum 的風景圖代替，所以商品改成明信片
const products = [
  {
    id: 1,
    name: '森林步道',
    price: 120,
    image: 'https://picsum.photos/seed/product-1/400/300'
  },
  {
    id: 2,
    name: '湖畔夕陽',
    price: 210,
    image: 'https://picsum.photos/seed/product-2/400/300'
  },
  {
    id: 3,
    name: '黑白海岸',
    price: 369,
    image: 'https://picsum.photos/seed/product-3/400/300'
  },
  {
    id: 4,
    name: '浪花岩岸',
    price: 300,
    image: 'https://picsum.photos/seed/product-4/400/300'
  },
  {
    id: 5,
    name: '衝浪海灘',
    price: 999,
    image: 'https://picsum.photos/seed/product-5/400/300'
  },
  {
    id: 6,
    name: '鄉間圍籬',
    price: 85,
    image: 'https://picsum.photos/seed/product-6/400/300'
  }
];
</script>

<template>
  <div class="product-list">
    <div
      v-for="product in products"
      :key="product.id"
      class="product-card"
    >
      <img
        :src="product.image"
        :alt="product.name"
      />

      <div class="product-info">
        <div class="product-title">
          <h3>{{ product.name }}</h3>
          <span>NT$ {{ product.price }}</span>
        </div>

        <button @click="cartStore.addCart(product)">
          加入購物車
        </button>
      </div>
    </div>
  </div>
</template>
