<script setup>
const firstName = defineModel('firstName');
const lastName = defineModel('lastName');
</script>

<template>
  <div class="file-block" data-name="components/UserForm.vue">
    <p>
      <label for="firstName">firstName：</label>
      <input id="firstName" v-model="firstName" />
    </p>
    <p>
      <label for="lastName">lastName：</label>
      <input id="lastName" v-model="lastName" />
    </p>
  </div>
</template>
