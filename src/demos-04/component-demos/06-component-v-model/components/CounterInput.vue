<script setup>
const model = defineModel();
</script>

<template>
  <div class="file-block" data-name="components/CounterInput.vue">
    <button @click="model++">
      {{ model }}
    </button>
  </div>
</template>
