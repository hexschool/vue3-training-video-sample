<script setup>
import { ref, watch } from 'vue'

// 1. 預設：等資料發生變化後才執行
const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log('count：', newValue, oldValue)
})

// 2. immediate：建立 watch 時先執行一次
const keyword = ref('Vue')

watch(
  keyword,
  (newValue, oldValue) => {
    console.log('keyword：', newValue, oldValue)
  },
  {
    immediate: true,
  }
)

// 3. deep：繼續追蹤物件內部的屬性變化
let user = ref({
  profile: {
    name: 'Antonio',
  },
})

watch(
  user,
  (newValue, oldValue) => {
    // console.log('user：', newValue, oldValue)
    console.log('查看名稱：', user.value.profile.name)
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<template>
  <button @click="count++">count + 1</button>
  <input v-model="keyword" />
  <input v-model="user.profile.name" />
  <p>打開 Console 觀察三個 watch 的觸發時機</p>
</template>
