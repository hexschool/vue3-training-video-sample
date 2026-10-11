<script setup>
import { ref, watchEffect } from 'vue'

const firstName = ref('Antonio')
const lastName = ref('Ling')

watchEffect(() => {
  console.log(`watchEffect 執行：${firstName.value} ${lastName.value}`)
})
</script>

<template>
  <input v-model="firstName" />
  <input v-model="lastName" />
  <p>打開 Console：一進來先印一次，之後改任一個輸入框都會再印</p>
</template>
