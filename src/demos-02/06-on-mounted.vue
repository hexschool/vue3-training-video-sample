<script setup>
import { ref, onMounted } from 'vue'

const name = ref('Antonio')
onMounted(() => {
  name.value = 'Amy'
})

const count = ref(0)
onMounted(() => {
  count.value = 100
})
</script>

<template>
  <div>
    <p>Name：{{ name }}</p>
    <p>Count：{{ count }}</p>
  </div>
</template>
