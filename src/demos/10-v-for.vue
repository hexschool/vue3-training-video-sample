```vue
<script setup>
import { ref } from 'vue'

// ==================== 陣列 ====================
// 準備多筆使用者資料
const users = [
  {
    id: 1,
    name: 'Antonio',
  },
  {
    id: 2,
    name: 'Mike',
  },
  {
    id: 3,
    name: 'Alex',
  },
]

// ==================== 物件 ====================
// 準備一筆使用者資料
const user = {
  name: 'Antonio',
  age: 30,
  job: 'Frontend Engineer',
}

// ==================== key 使用 index 的後果 ====================
const reversibleUsers = ref([
  { id: 1, name: 'Antonio' },
  { id: 2, name: 'Mike' },
  { id: 3, name: 'Alex' },
])

const reverseUsers = () => {
  reversibleUsers.value.reverse()
}

// ==================== template 搭配 v-for ====================
const courses = [
  {
    id: 1,
    title: 'HTML 基礎',
    lessons: [
      { id: 101, name: 'HTML 結構' },
      { id: 102, name: '常用標籤' },
    ],
  },
  {
    id: 2,
    title: 'CSS 基礎',
    lessons: [
      { id: 201, name: '選擇器' },
      { id: 202, name: '盒模型' },
    ],
  },
]
</script>

<template>
  <!-- ==================== 遍歷陣列 ==================== -->
  <h2>遍歷陣列</h2>

  <ul>
    <!--
      item：目前這一筆資料
      index：目前資料的索引位置，從 0 開始
    -->
    <li v-for="(item, index) in users" :key="item.id">
      {{ index }}：{{ item.name }}
    </li>
  </ul>

  <hr />

  <!-- ==================== 遍歷物件 ==================== -->
  <h2>遍歷物件</h2>

  <ul>
    <!--
      value：目前屬性的值
      key：目前屬性的名稱
      index：目前屬性的索引位置，從 0 開始
    -->
    <li v-for="(value, key, index) in user" :key="key">
      {{ index }}：{{ key }}：{{ value }}
    </li>
  </ul>

  <hr />

  <!-- ==================== 使用數字 ==================== -->
  <h2>使用數字</h2>

  <ul>
    <!--
      number 會依序取得 1、2、3
      使用數字時會從 1 開始
    -->
    <li v-for="number in 10" :key="number">
      {{ number }}
    </li>
  </ul>

  <hr />

  <!-- ==================== key 使用 index 的後果 ==================== -->
  <h2>key 使用 index 的後果</h2>

  <p>
    在每個輸入框各打一個字，再按「反轉順序」。名字會反轉，但輸入框裡的內容仍然留在原本的位置。
    因為 key 使用 index，Vue 仍然把第 0 個位置視為同一個元素，只更新裡面的資料。
    如果改成 <code>:key="item.id"</code>，Vue 就能根據每筆資料的 id 正確辨識元素。
  </p>

  <button type="button" @click="reverseUsers">
    反轉順序
  </button>

  <ul>
    <li v-for="(item, index) in reversibleUsers" :key="item.id">
      {{ item.name }}
      <input type="text" />
    </li>
  </ul>

  <hr />

  <!-- ==================== template 搭配 v-for ==================== -->
  <h2>template 搭配 v-for</h2>

  <section class="course-list">
    <!--
      template 本身不會產生 DOM 元素
      可以讓一次 v-for 產生多個同層元素
    -->
    <template v-for="course in courses" :key="course.id">
      <!-- 課程名稱 -->
      <h3 class="course-title">
        {{ course.title }}
      </h3>

      <!-- 目前課程的單元 -->
      <ul class="lesson-list">
        <li v-for="lesson in course.lessons" :key="lesson.id" class="lesson">
          {{ lesson.name }}
        </li>
      </ul>
    </template>
  </section>
</template>

<style scoped>
.course-title {
  margin-bottom: 8px;
}

.lesson-list {
  margin-bottom: 16px;
}

.lesson {
  color: #6b736c;
}
</style>
```
