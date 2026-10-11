<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'

const props = defineProps({
  id: String,
  page: String,
})
const user = ref(null)

const fetchUser = async ([id, page]) => {
  user.value = null
  const res = await axios.get('https://randomuser.me/api/', {
    params: { seed: id, page },
  })
  user.value = res.data.results[0]
}

// 只換 ?page= 時路徑沒變，元件一樣會被重用，所以 id 和 page 都要監聽
watch(() => [props.id, props.page], fetchUser, { immediate: true })
</script>

<template>
  <div class="file-block" data-name="views/UserView.vue">
    <p>User ID：{{ id }}</p>
    <p>Page：{{ page }}</p>

    <div v-if="user">
      <img :src="user.picture.large" :alt="user.name.first">
      <h2>{{ user.name.first }} {{ user.name.last }}</h2>
      <p>{{ user.email }}</p>
    </div>
    <p v-else>載入中…</p>
  </div>
</template>
