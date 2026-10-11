<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="file-block" data-name="views/UserView.vue">
    <p>User ID：{{ route.params.id }}</p>
  </div>
</template>
