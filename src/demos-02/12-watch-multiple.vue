<script setup>
import { ref, watch } from 'vue'

const firstName = ref('Antonio')
const lastName = ref('Ling')

watch(
  [firstName, lastName],
  ([newFirstName, newLastName], [oldFirstName, oldLastName]) => {
    console.log('新的資料：', newFirstName, newLastName)
    console.log('原本的資料：', oldFirstName, oldLastName)
  }
)
</script>

<template>
  <input v-model="firstName" />
  <input v-model="lastName" />
</template>
