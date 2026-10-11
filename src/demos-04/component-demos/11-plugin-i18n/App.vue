<script setup>
import { inject } from 'vue';

const i18n = inject('i18n');
</script>

<template>
  <h1>{{ i18n.greetings.hello }}</h1>
  <p>{{ i18n.greetings.welcome }}</p>
</template>
