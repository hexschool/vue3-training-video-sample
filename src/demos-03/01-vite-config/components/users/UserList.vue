<script setup>
import { ref, onMounted } from 'vue'
import { apiGetUsers } from '../../../api/axios.js'
// vite.config.js 加上 alias 之後，把上面那行換成這行（講完記得先換回來再刪 alias）：
// import { apiGetUsers } from '@/demos-03/api/axios.js'

const users = ref([])

onMounted(async () => {
  const response = await apiGetUsers()
  users.value = response.data
})
</script>

<template>
  <div class="file-block" data-name="components/users/UserList.vue">
    <p>透過 api/axios.js 取得 {{ users.length }} 位使用者：</p>
    <ul>
      <li v-for="user in users.slice(0, 3)" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
