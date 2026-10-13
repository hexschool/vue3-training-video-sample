<script setup>
import { useTemplateRef } from 'vue'
import BaseModal from '../components/BaseModal.vue'

const modalRef = useTemplateRef('modal')

function showModal() {
  // console.log('visible', modalRef.value.visible)
  if (modalRef.value) {
    modalRef.value.open()
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
