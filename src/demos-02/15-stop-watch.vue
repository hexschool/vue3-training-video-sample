<script setup>
import { ref, watch } from 'vue'

const count = ref(0)

const stopWatch2222 = watch(count, () => {
  console.log('count 改變了')
})

const stop = () => {
  stopWatch2222()
}
</script>

<template>
  <h2>{{ count }}</h2>
  <button @click="count++">
    Count + 1
  </button>

  <button @click="stop">
    停止監聽
  </button>
</template>
