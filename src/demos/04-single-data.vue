<script setup>
import { ref } from 'vue'

// 建立響應式資料
const productName = ref('草莓蛋糕')
const imageUrl = ref('https://picsum.photos/300/200')

// 表單送出時執行
const submitProduct = () => {
  console.log('產品名稱：', productName.value)
  console.log('圖片網址：', imageUrl.value)
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

        <!-- v-model：將表單內容與 productName 雙向綁定 -->
        <input id="productName" v-model="productName" type="text" />
      </div>

      <div>
        <label for="imageUrl">產品圖片：</label>
        <!-- v-model：將表單內容與 imageUrl 雙向綁定 -->
        <input id="imageUrl" v-model="imageUrl" type="text" />
      </div>

      <button type="submit">儲存產品</button>
    </form>
  </section>

  <!-- 資料呈現區 -->
  <section>
    <h2>產品資料</h2>
    <p>產品名稱：{{ productName }}</p>
    <!-- v-bind：將 JavaScript 資料綁定到 HTML 屬性 -->
    <img v-bind:src="imageUrl" v-bind:alt="productName" width="300" />
  </section>
</template>
