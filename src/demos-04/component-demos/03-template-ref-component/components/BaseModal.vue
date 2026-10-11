<script setup>
import { ref } from 'vue'

const visible = ref(false)

function open() {
  visible.value = true
}

function close() {
  visible.value = false
}

defineExpose({
  open,
})
</script>

<template>
  <div v-if="visible" class="file-block" data-name="components/BaseModal.vue">
    Modal Content
  </div>
</template>
