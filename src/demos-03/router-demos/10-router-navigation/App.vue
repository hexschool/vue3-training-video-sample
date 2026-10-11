<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoggingIn = ref(false)

const handleLogin = async () => {
  isLoggingIn.value = true

  // 用 setTimeout 包成 Promise，模擬打登入 API 要等 2 秒
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // 登入成功後
  isLoggingIn.value = false
  router.push('/dashboard')
}
</script>

<template>
  <div class="file-block" data-name="App.vue">
    <div class="actions">
      <button :disabled="isLoggingIn" @click="handleLogin">
        {{ isLoggingIn ? '登入中…' : '登入' }}
      </button>

      <button @click="router.push({ name: 'about' })">
        push({ name })
      </button>

      <button @click="router.push({ name: 'user', params: { id: 123 } })">
        params
      </button>

      <button @click="router.push({ path: '/products', query: { page: 2, keyword: 'vue' } })">
        query
      </button>

      <button @click="router.replace('/dashboard')">
        replace('/dashboard')
      </button>
    </div>

    <div class="actions">
      <button @click="router.back()">
        上一頁
      </button>

      <button @click="router.forward()">
        下一頁
      </button>
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}
</style>

<style>
/* 每個檔案最外層的 div：虛線框加上檔名，看得出畫面上哪一塊是哪個檔案 */
body {
  font-family: system-ui, sans-serif;
  margin: 32px;
}

.file-block {
  position: relative;
  margin-top: 12px;
  padding: 20px 16px 12px;
  border: 2px dashed #42b883;
  border-radius: 8px;
}

.file-block::before {
  content: attr(data-name);
  position: absolute;
  top: -11px;
  left: 12px;
  padding: 0 6px;
  background: #fff;
  color: #42b883;
  font-size: 13px;
  font-weight: 600;
}
</style>
