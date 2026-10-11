<script setup>
import { ref } from 'vue';
import LifecycleDemo from './LifecycleDemo.vue';

const show = ref(true);
</script>

<template>
  <button @click="show = !show">
    {{ show ? '移除元件' : '建立元件' }}
  </button>

  <hr />

  <LifecycleDemo v-if="show" />
</template>
