<script setup>
const firstName = defineModel('firstName');
const lastName = defineModel('lastName');
</script>

<template>
  <div class="file-block" data-name="components/UserForm.vue">
    <input v-model="firstName" />
    <input v-model="lastName" />
  </div>
</template>
