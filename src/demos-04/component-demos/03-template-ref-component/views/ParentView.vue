<script setup>
import { useTemplateRef } from 'vue'
import BaseModal from '../components/BaseModal.vue'

const modal = useTemplateRef('modal')

function showModal() {
  if (modal.value) {
    modal.value.open()
  }
}
</script>

<template>
  <div class="file-block" data-name="views/ParentView.vue">
    <button @click="showModal">
      開啟 Modal
    </button>

    <BaseModal ref="modal" />
  </div>
</template>
