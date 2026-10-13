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
  visible
})
</script>

<template>
  <div v-if="visible" class="file-block" data-name="components/BaseModal.vue">
    Modal Content
    <button @click="close">
      關閉
    </button>
  </div>
</template>
