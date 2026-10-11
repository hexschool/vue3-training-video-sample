<script setup>
import { ref } from 'vue'
import axios from 'axios'

const directResult = ref('')
const proxyResult = ref('')

// 直接打 mock-api：localhost:5173 → localhost:3001 是跨來源，
// mock-api 沒有回 Access-Control-Allow-Origin，瀏覽器會擋下來
const getUsersDirectly = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/users')
    directResult.value = `拿到 ${response.data.length} 位使用者`
  } catch (error) {
    directResult.value = `請求失敗：${error.message}（打開 Console 看 CORS 錯誤，mock-api 的終端機也看得到這筆請求）`
  }
}

// 打自己（localhost:5173）的 /api/users：
// 沒有 proxy 時 Dev Server 會回 index.html；有 proxy 時由 Dev Server 轉給 mock-api，同源所以不會被擋
const getUsersByProxy = async () => {
  try {
    const response = await axios.get('/api/users')
    proxyResult.value = Array.isArray(response.data)
      ? `拿到 ${response.data.length} 位使用者：${response.data.map((user) => user.name).join('、')}`
      : `拿到的是 ${response.headers['content-type']}，不是 JSON——proxy 還沒設定`
  } catch (error) {
    proxyResult.value = `請求失敗：${error.message}（mock-api 有啟動嗎？）`
  }
}
</script>

<template>
  <div class="file-block" data-name="components/ProxyCheck.vue">
    <p>
      <button @click="getUsersDirectly">
        直接打 http://localhost:3001/api/users
      </button>
    </p>
    <p>{{ directResult }}</p>

    <p>
      <button @click="getUsersByProxy">
        透過 Dev Server 打 /api/users
      </button>
    </p>
    <p>{{ proxyResult }}</p>
  </div>
</template>
