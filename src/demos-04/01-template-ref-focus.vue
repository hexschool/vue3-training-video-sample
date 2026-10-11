<script setup>
import { onMounted, useTemplateRef } from 'vue'

const input = useTemplateRef('input')

onMounted(() => {
  if (input.value) {
    input.value.focus()
  }
})
</script>

<template>
  <input ref="input" />
</template>
