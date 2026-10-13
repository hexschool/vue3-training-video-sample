<script setup>
import { ref } from 'vue';
// 這裡沒有 import vFocus，靠的是 main.js 裡的 app.directive()

const isShow = ref(false);
</script>

<template>
  <div class="file-block" data-name="components/GlobalFocus.vue">
    <p>全域註冊：不用 import，直接寫 v-focus</p>
    <button @click="isShow = !isShow">
      {{ isShow ? '關閉輸入框' : '顯示輸入框' }}
    </button>
    <input v-if="isShow" v-focus placeholder="請輸入姓名" />
  </div>
</template>
