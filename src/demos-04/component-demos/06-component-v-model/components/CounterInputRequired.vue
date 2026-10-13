<script setup>
// required：父元件一定要用 v-model 傳值，沒傳的話 Console 會出現警告
const model = defineModel({
  required: true,
});
</script>

<template>
  <div class="file-block" data-name="components/CounterInputRequired.vue">
    <p>當前值：{{ model }}</p>
    <button @click="model++">+ 1</button>
  </div>
</template>
