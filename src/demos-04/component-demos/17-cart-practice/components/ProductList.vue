<script setup>
// TODO 步驟 3：拿到 Cart Store，按鈕才能呼叫 addCart

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
    <!-- TODO 步驟 2：用 v-for 把 products 跑出來，下面這張先寫死的卡片改成動態 -->
    <div class="product-card">
      <!-- TODO 步驟 2：src、alt 改成綁定商品資料 -->
      <img src="https://picsum.photos/seed/product-1/400/300" alt="森林步道" />

      <div class="product-info">
        <div class="product-title">
          <!-- TODO 步驟 2：名稱、價格改成 {{ }} 顯示 -->
          <h3>森林步道</h3>
          <span>NT$ 120</span>
        </div>

        <!-- TODO 步驟 3：點擊時呼叫 Store 的 addCart，把這個商品傳進去 -->
        <button>
          加入購物車
        </button>
      </div>
    </div>
  </div>
</template>
