<script setup>
import { ref } from 'vue'
import UserCard from '../components/UserCard.vue'

const userName1 = ref({ testName: "Antonio" })
const userAge1 = ref(18)

const userName2 = ref('Bella')
const userAge2 = ref(25)
</script>

<template>
  <div class="file-block" data-name="views/ParentView.vue">
    <UserCard :name="userName1" :user-age="userAge1" />

    <!-- <UserCard :name="userName2" :user-age="userAge2" /> -->
  </div>
</template>
