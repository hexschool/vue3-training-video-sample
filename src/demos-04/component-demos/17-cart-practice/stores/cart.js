import { acceptHMRUpdate, defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  // TODO 步驟 1：建立 cart，保存加入購物車的商品（一開始是空陣列）

  // TODO 步驟 3：addCart(product)
  // 購物車已經有這個商品 → 數量 qty + 1
  // 還沒有 → 加入一筆新的，qty 從 1 開始

  // TODO 步驟 4：removeCart(id)
  // 用 id 找到這筆商品的位置，把它從 cart 移除

  // TODO 步驟 6：totalPrice，用 computed 加總每筆的 價格 × 數量

  // TODO 步驟 8：cartCount，用 computed 加總每筆的 qty（不是 cart 的長度）

  return {
    // 寫好的東西記得 return 出去，元件才拿得到
  };
});

// 開發時改了 Store，讓 Pinia 也換成新版本，不用重新整理頁面
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
