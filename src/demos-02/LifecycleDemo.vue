<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

const count = ref(0);

onBeforeMount(() => {
  console.log('onBeforeMount：準備掛載');
  debugger;
});

onMounted(() => {
  console.log('onMounted：掛載完成');
  debugger;
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate：畫面準備更新');
  debugger;
});

onUpdated(() => {
  console.log('onUpdated：畫面更新完成');
  debugger;
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount：元件準備被卸載');
  debugger;
});

onUnmounted(() => {
  console.log('onUnmounted：元件已經被卸載');
  debugger;
});
</script>

<template>
  <div class="child-classclassclass">
    <h2>我是子元件</h2>
    <p>Count：{{ count }}</p>

    <button @click="count++">Count + 1</button>
  </div>
</template>
