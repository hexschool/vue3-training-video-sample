<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AdminView from './views/AdminView.vue'

const router = useRouter()

// 講義的 user 從登入資料來，這裡先寫死成管理員
const user = { role: 'admin' }

// hasRoute() 不是響應式的，每次加減路由後自己更新一次
const hasAdmin = ref(router.hasRoute('admin'))

const addAdminRoute = () => {
  if (user.role === 'admin') {
    router.addRoute({
      path: '/admin',
      name: 'admin',
      component: AdminView,
    })
  }

  hasAdmin.value = router.hasRoute('admin')
}

const removeAdminRoute = () => {
  router.removeRoute('admin')
  hasAdmin.value = router.hasRoute('admin')
}
</script>

<template>
  <div class="file-block" data-name="App.vue">
    <p>路由表裡{{ hasAdmin ? '有' : '沒有' }} /admin</p>

    <div class="actions">
      <button @click="addAdminRoute">
        addRoute
      </button>

      <!-- 還沒 addRoute 就按：Router 不認得 /admin，畫面空白，Console 會有 No match 警告。 -->
      <button @click="router.push('/admin')">
        push('/admin')
      </button>

      <button :disabled="!hasAdmin" @click="removeAdminRoute">
        removeRoute('admin')
      </button>
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
.actions {
  display: flex;
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
