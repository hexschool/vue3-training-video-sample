<script setup>
import { ref } from 'vue'

// 預設為登入中
const loginStatus = ref('loading')

// 2 秒後隨機決定登入成功或失敗
setTimeout(() => {
  const isSuccess = Math.random() > 0.5

  loginStatus.value = isSuccess ? 'success' : 'error'
}, 2000)

// 重跑一次，不用每次都重新整理頁面
const retry = () => {
  loginStatus.value = 'loading'

  setTimeout(() => {
    loginStatus.value = Math.random() > 0.5 ? 'success' : 'error'
  }, 2000)
}

// v-for 搭配 v-if
const todos = ref([
  {
    id: 1,
    title: '完成 Vue 作業',
    shouldDo: true,
  },
  {
    id: 2,
    title: '整理房間',
    shouldDo: false,
  },
  {
    id: 3,
    title: '準備明天的簡報',
    shouldDo: true,
  },
])

// v-if vs v-show
const isVisible = ref(true)
</script>

<template>
  <h2>v-if / v-else-if / v-else</h2>

  <!-- 登入成功時顯示 -->
  <p v-if="loginStatus === 'success'">
    歡迎回來！
  </p>

  <!-- 還在登入處理中時顯示 -->
  <p v-else-if="loginStatus === 'loading'">
    登入中...
  </p>

  <!-- 以上條件都不成立時顯示 -->
  <p v-else>
    登入失敗，請重新登入。
  </p>

  <button type="button" @click="retry">
    再試一次
  </button>

  <hr />

  <h2>用 template 一次控制多個元素</h2>

  <!--
    當條件成立時，如果需要一次顯示多個元素，
    可以使用 template 將它們包在一起
  -->
  <template v-if="loginStatus === 'success'">
    <h3>歡迎回來！</h3>
    <p>登入成功</p>
    <button type="button">
      前往會員中心
    </button>
  </template>

  <p v-else-if="loginStatus === 'loading'">
    登入中...
  </p>

  <p v-else>
    登入失敗，請重新登入。
  </p>

  <hr />

  <h2>v-for 搭配 v-if</h2>

  <p>
    不建議把 v-if 和 v-for 寫在同一個元素上。
    因為同一個元素上 v-if 的優先級比 v-for 高，
    執行 v-if 時還無法取得目前迴圈中的 todo。
  </p>

  <p>
    如果需要根據每一筆資料決定是否顯示，
    可以把 v-for 放在 template 上，再把 v-if 放到裡面的元素。
  </p>

  <div class="todo-container">
    <!-- 要做的事情 -->
    <div>
      <h3>要做的</h3>

      <ul>
        <template v-for="todo in todos" :key="todo.id">
          <li v-if="todo.shouldDo">
            <label>
              <input v-model="todo.shouldDo" type="checkbox" />

              {{ todo.title }}
            </label>
          </li>
        </template>
      </ul>
    </div>

    <!-- 不要做的事情 -->
    <div>
      <h3>不要做的</h3>

      <ul>
        <template v-for="todo in todos" :key="todo.id">
          <li v-if="!todo.shouldDo">
            <label>
              <input v-model="todo.shouldDo" type="checkbox" />

              {{ todo.title }}
            </label>
          </li>
        </template>
      </ul>
    </div>
  </div>

  <hr />

  <h2>v-if vs v-show</h2>

  <p>
    切換下面的狀態，再打開瀏覽器開發者工具觀察 DOM。
    v-if 條件不成立時，元素會從 DOM 中移除；
    v-show 則會保留元素，並透過
    <code>display: none</code>
    隱藏。
  </p>

  <button type="button" @click="isVisible = !isVisible">
    切換 isVisible（目前：{{ isVisible }}）
  </button>

  <p v-if="isVisible">
    我是 v-if：條件不成立時，元素會被移除
  </p>

  <p v-show="isVisible">
    我是 v-show：條件不成立時，元素只是被隱藏
  </p>
</template>

<style scoped>
.todo-container {
  display: flex;
  gap: 48px;
}

.todo-container>div {
  width: 250px;
}
</style>