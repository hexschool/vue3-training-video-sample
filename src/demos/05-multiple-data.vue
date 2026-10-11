<script setup>
import { ref } from 'vue'

// 表單資料
const productName = ref('')
const imageUrl = ref('')

// 建立多筆產品資料
const products = ref([
  {
    id: 1,
    name: '草莓蛋糕',
    imageUrl: 'https://picsum.photos/300/200?random=1',
  },
  {
    id: 2,
    name: '巧克力蛋糕',
    imageUrl: 'https://picsum.photos/300/200?random=2',
  },
])

// 表單送出時執行
const submitProduct = () => {
  const product = {
    id: Date.now(),
    name: productName.value,
    imageUrl: imageUrl.value,
  }

  // 新增一筆產品資料
  products.value.push(product)

  // 清空表單
  productName.value = ''
  imageUrl.value = ''
}
</script>

<template>
  <!-- 表單操作區 -->
  <section>
    <h2>產品表單</h2>

    <!-- v-on：監聽表單 submit 事件 -->
    <form v-on:submit.prevent="submitProduct">
      <div>
        <label for="productName">產品名稱：</label>

        <!-- v-model：與 productName 雙向綁定 -->
        <input id="productName" v-model="productName" type="text" />
      </div>

      <div>
        <label for="imageUrl">產品圖片：</label>

        <!-- v-model：與 imageUrl 雙向綁定 -->
        <input id="imageUrl" v-model="imageUrl" type="text" />
      </div>

      <button type="submit">新增產品</button>
    </form>
  </section>

  <!-- 資料呈現區 -->
  <section>
    <h2>產品資料</h2>

    <!-- v-for：逐筆呈現 products 中的產品 -->
    <div v-for="product in products" v-bind:key="product.id">
      <!-- {{ }}：呈現產品名稱 -->
      <p>產品名稱：{{ product.name }}</p>

      <!-- v-bind：將資料綁定到 HTML 屬性 -->
      <img
        v-bind:src="product.imageUrl"
        v-bind:alt="product.name"
        width="300"
      />
    </div>
  </section>
</template>
