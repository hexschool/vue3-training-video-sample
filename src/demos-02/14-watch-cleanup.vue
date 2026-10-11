<script setup>
import { ref, watch, onWatcherCleanup } from 'vue'

const keyword = ref('')

watch(keyword, async (newValue) => {
  const controller = new AbortController()

  // 下一次 watch 執行前，
  // 先取消這一次發出去的 Request
  onWatcherCleanup(() => {
    controller.abort()
  })

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?q=${newValue}`, {
      signal: controller.signal,
    })

    console.log("response", newValue, await response.json())
  } catch (error) {
    // 被 abort 的 Request 會丟出 AbortError，這是預期中的，印出來方便觀察
    if (error.name === 'AbortError') {
      console.log(newValue, '→ 已取消')
      return
    }
    throw error
  }
})
</script>

<template>
  <input v-model="keyword" placeholder="快速輸入，觀察 Network 裡被取消的 Request" />
</template>
