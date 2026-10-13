<script setup>
import { ref } from 'vue';
// 區域註冊：在 <script setup> 裡 import 名字是 v 開頭的變數，template 就能用 v-focus
import { vFocus } from '../directives/focus.js';

const isShow = ref(false);
</script>

<template>
  <div class="file-block" data-name="components/LocalFocus.vue">
    <p>區域註冊：這個元件自己 import vFocus</p>
    <button @click="isShow = !isShow">
      {{ isShow ? '關閉輸入框' : '顯示輸入框' }}
    </button>
    <input v-if="isShow" v-focus placeholder="請輸入姓名" />
  </div>
</template>
