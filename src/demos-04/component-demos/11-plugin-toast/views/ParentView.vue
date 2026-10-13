<script setup>
import { inject } from 'vue';

// 不用 import Plugin，直接拿 install() 裡 provide 的 toast
const toast = inject('toast');
</script>

<template>
  <div class="file-block" data-name="views/ParentView.vue">
    <button @click="toast.success('儲存成功')">儲存成功</button>
    <button @click="toast.error('儲存失敗')">儲存失敗</button>
  </div>
</template>
