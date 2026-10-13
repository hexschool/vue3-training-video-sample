<script setup>
const model = defineModel();
</script>

<template>
  <div class="file-block" data-name="components/CounterInput.vue">
    <p>當前值：{{ model }}</p>
    <button @click="model++">+ 1</button>
  </div>
</template>
