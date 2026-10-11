<script setup>
const vFocus = {
  mounted(el) {
    el.focus();
  }
};
</script>

<template>
  <input v-focus placeholder="請輸入姓名" />
</template>
