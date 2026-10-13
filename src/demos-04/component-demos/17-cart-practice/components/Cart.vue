<script setup>
// TODO 步驟 5：拿到 Cart Store
</script>

<template>
  <div class="cart">
    <!-- TODO 步驟 7：購物車沒有商品時才顯示 -->
    <div class="empty-cart">
      購物車目前沒有商品
    </div>

    <!-- TODO 步驟 5：用 v-for 把購物車的商品跑出來，下面這筆先寫死的改成動態 -->
    <div class="cart-item">
      <!-- TODO 步驟 4：點擊時呼叫 removeCart，傳入這筆商品的 id -->
      <button class="remove">
        ×
      </button>

      <!-- TODO 步驟 5：src、alt、名稱、價格改成綁定商品資料 -->
      <img src="https://picsum.photos/seed/product-1/400/300" alt="森林步道" />

      <div class="cart-info">
        <h4>森林步道</h4>
        <span>NT$ 120</span>
      </div>

      <!-- TODO 步驟 5：用 v-model 綁定數量；option 用 v-for 產生 1～10 -->
      <select>
        <option value="1">1</option>
      </select>

      <!-- TODO 步驟 5：小計 = 價格 × 數量 -->
      <strong>
        NT$ 120
      </strong>
    </div>

    <!-- TODO 步驟 6：購物車有商品時才顯示，金額改成 totalPrice -->
    <div class="cart-total">
      總金額 NT$ 0
    </div>
  </div>
</template>
