<script setup>
import { ref } from 'vue'
import UserCard from '../components/UserCard.vue'

const names = ['Antonio', 'Bella', 'Charlie']
const name = ref('Antonio')

const randomUser = () => {
  const index = Math.floor(Math.random() * names.length)
  name.value = names[index]
}
</script>

<template>
  <div class="file-block" data-name="views/ParentView.vue">
    <UserCard
      :name="name"
      @random-user="randomUser"
    />
  </div>
</template>
