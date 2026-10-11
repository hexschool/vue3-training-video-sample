<script setup>
import { ref, computed } from 'vue'

const firstName = ref('Antonio')
const lastName = ref('Ling')

const fullName = computed({
  get() {
    console.log('computed get 觸發囉')
    return `${firstName.value} ${lastName.value}`
  },

  set(value) {
    console.log('computed set 觸發囉')
    const [first, last] = value.split(' ')

    firstName.value = first
    lastName.value = last
  },
})
</script>

<template>
  <p>Full Name：{{ fullName }}</p>
  <input v-model="fullName" />
  <p>firstName：{{ firstName }}</p>
  <p>lastName：{{ lastName }}</p>
</template>
