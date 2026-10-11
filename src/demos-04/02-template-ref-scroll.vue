<script setup>
import { useTemplateRef } from 'vue'

const section = useTemplateRef('target-section')

function scrollToSection() {
  if (section.value) {
    section.value.scrollIntoView({
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <button @click="scrollToSection">
    捲動到目標區塊
  </button>

  <div style="height: 800px"></div>

  <section ref="target-section">
    目標區塊
  </section>
</template>
