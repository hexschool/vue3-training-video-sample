<script setup>
import { ref, computed } from 'vue'

const score = ref(85)

const result = computed(() => {
  if (score.value >= 90) {
    return '優秀'
  }

  if (score.value >= 60) {
    return '及格'
  }

  return '不及格'
})
</script>

<template>
  <input v-model.number="score" type="number" />
  <p>{{ result }}</p>
</template>
