<script setup>
import { inject } from 'vue';

// 把 messages 取出來，template 才會自動解開 ref，不用寫 .value
const { messages } = inject('toast');
</script>

<template>
  <div class="toast-container">
    <div
      v-for="message in messages"
      :key="message.id"
      class="toast"
      :class="message.type"
    >
      {{ message.text }}
    </div>
  </div>
</template>
