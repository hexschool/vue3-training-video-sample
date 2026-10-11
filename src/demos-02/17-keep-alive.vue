<script setup>
import { ref } from 'vue'
import TabA from './components/TabA.vue'
import TabB from './components/TabB.vue'

const currentTab = ref('A')
</script>

<template>
  <button @click="currentTab = 'A'">
    Tab A
  </button>

  <button @click="currentTab = 'B'">
    Tab B
  </button>

  <KeepAlive>
    <TabA v-if="currentTab === 'A'" />
    <TabB v-else />
  </KeepAlive>
</template>
