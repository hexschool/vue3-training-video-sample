<script setup>
import {
  ref,
  onMounted,
  onActivated,
  onDeactivated,
} from 'vue'

const count = ref(0)

onMounted(() => {
  console.log('Tab A：onMounted：第一次掛載')
  debugger
})

onActivated(() => {
  console.log('Tab A：onActivated：元件被顯示出來')
  debugger
})

onDeactivated(() => {
  console.log('Tab A：onDeactivated：元件暫時被隱藏，但還沒有被卸載')
  debugger
})
</script>

<template>
  <div>
    <h2>Tab A</h2>

    <p>Count：{{ count }}</p>

    <button @click="count++">
      Count + 1
    </button>
  </div>
</template>
