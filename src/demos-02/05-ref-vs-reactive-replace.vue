<script setup>
import { ref, reactive, isReactive } from 'vue'

// 每次隨機拿一位使用者（id 1～10），API 每次都回傳一個全新的物件
const fetchUser = async () => {
  const id = Math.floor(Math.random() * 10) + 1
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  return response.json()
}


// 1. ref：直接替換 .value，會得到一個新的 Proxy
const user = ref(null)

const getUserByRef = async () => {
  user.value = await fetchUser()

  console.log('user', user)
}


// 2. reactive：直接替換變數，會失去響應性
let userReactive = reactive({ name: '', email: '' })

const getUserByReactive = async () => {
  userReactive = await fetchUser()

  console.log('userReactive：', userReactive)
}


// 3. reactive：用 Object.assign 更新原本的物件
const userAssign = reactive({ name: '', email: '' })

const getUserByAssign = async () => {
  const oldUser = userAssign
  Object.assign(userAssign, await fetchUser())

  console.log('userAssign', userAssign)
  console.log('跟替換前是同一個 Proxy 嗎：', oldUser === userAssign) // true
}
</script>

<template>
  <div>
    <!-- 1. ref 直接替換 -->
    <section>
      <h2>ref：直接替換 .value</h2>
      <p>{{ user?.name }} {{ user?.email }}</p>
      <button @click="getUserByRef">
        取得使用者
      </button>
    </section>

    <hr />

    <!-- 2. reactive 直接替換：畫面不會更新 -->
    <section>
      <h2>reactive：直接替換變數</h2>
      <p>{{ userReactive.name }} {{ userReactive.email }}</p>
      <button @click="getUserByReactive">
        取得使用者
      </button>
    </section>

    <hr />

    <!-- 3. reactive + Object.assign -->
    <section>
      <h2>reactive：Object.assign</h2>
      <p>{{ userAssign.name }} {{ userAssign.email }}</p>
      <button @click="getUserByAssign">
        取得使用者
      </button>
    </section>
  </div>
</template>
