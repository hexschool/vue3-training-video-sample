<script setup>
import {
  onMounted,
  onActivated,
  onDeactivated,
} from 'vue'

onMounted(() => {
  console.log('Tab B：onMounted：第一次掛載')
  debugger
})

onActivated(() => {
  console.log('Tab B：onActivated：元件被顯示出來')
  debugger
})

onDeactivated(() => {
  console.log('Tab B：onDeactivated：元件暫時被隱藏，但還沒有被卸載')
  debugger
})
</script>

<template>
  <div>
    <h2>Tab B</h2>

    <p>這是 Tab B</p>
  </div>
</template>
