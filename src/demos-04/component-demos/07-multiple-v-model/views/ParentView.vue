<script setup>
import { ref } from 'vue';
import UserForm from '../components/UserForm.vue';

const firstName = ref('');
const lastName = ref('');
</script>

<template>
  <div class="file-block" data-name="views/ParentView.vue">
    <p>父元件的 firstName：{{ firstName }}</p>
    <p>父元件的 lastName：{{ lastName }}</p>

    <UserForm
      v-model:firstName="firstName"
      v-model:lastName="lastName"
    />
  </div>
</template>
