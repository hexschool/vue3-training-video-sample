<script setup>
// default：父元件沒給值時，子元件先用 0
// 但這個 0 只存在子元件，要等按下 + 1 才會傳回父元件
const model = defineModel({
  default: 0,
});
</script>

<template>
  <div class="file-block" data-name="components/CounterInputDefault.vue">
    <p>當前值：{{ model }}</p>
    <button @click="model++">+ 1</button>
  </div>
</template>
