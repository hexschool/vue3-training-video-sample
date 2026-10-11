<script setup>
import { ref } from 'vue';
import CounterInput from './components/CounterInput.vue';

const count = ref(0);
</script>

<template>
  <div class="file-block" data-name="Parent.vue">
    <p>父元件的 count：{{ count }}</p>

    <CounterInput v-model="count" />
  </div>
</template>
