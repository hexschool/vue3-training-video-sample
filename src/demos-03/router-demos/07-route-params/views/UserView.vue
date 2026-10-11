<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
console.log('查看 route：', route)
const user = ref(null)

const fetchUser = async (id) => {
  user.value = null
  const res = await axios.get('https://randomuser.me/api/', {
    params: { seed: id },
  })
  user.value = res.data.results[0]
}

watch(() => route.params.id, fetchUser, { immediate: true })
</script>

<template>
  <div class="file-block" data-name="views/UserView.vue">
    <p>User ID：{{ route.params.id }}</p>

    <div v-if="user">
      <img :src="user.picture.large" :alt="user.name.first">
      <h2>{{ user.name.first }} {{ user.name.last }}</h2>
      <p>{{ user.email }}</p>
    </div>
    <p v-else>載入中…</p>
  </div>
</template>
