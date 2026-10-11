<script setup>
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();

// 講義的圖片是 /images/product-1.jpg～6.jpg，這裡先用 picsum 的假圖代替
const products = [
  {
    id: 1,
    name: '鮮果優格餐',
    price: 120,
    image: 'https://picsum.photos/seed/product-1/400/300'
  },
  {
    id: 2,
    name: '全蔬食健康餐',
    price: 210,
    image: 'https://picsum.photos/seed/product-2/400/300'
  },
  {
    id: 3,
    name: '酒蒸蛤蜊',
    price: 369,
    image: 'https://picsum.photos/seed/product-3/400/300'
  },
  {
    id: 4,
    name: '綜合特調果汁',
    price: 300,
    image: 'https://picsum.photos/seed/product-4/400/300'
  },
  {
    id: 5,
    name: '巧克力蛋糕',
    price: 999,
    image: 'https://picsum.photos/seed/product-5/400/300'
  },
  {
    id: 6,
    name: '德式黑森林蛋糕',
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
