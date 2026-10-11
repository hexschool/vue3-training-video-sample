<script setup>
import { ref } from 'vue'

// Email
const email = ref('')

// 是否記住我
const remember = ref(false)

// 登入訊息
const message = ref('')

// input：輸入內容時觸發
const handleInput = (event) => {
  email.value = event.target.value
}

// change：表單內容改變時觸發
const handleChange = (event) => {
  remember.value = event.target.checked
}

// submit：送出表單時觸發
const handleSubmit = (event) => {
  // 阻止 form 預設的送出行為
  event.preventDefault()

  message.value = `登入帳號：${email.value}`
}

// click：接收自訂參數與原生 Event
const handleFillEmail = (value, event) => {
  email.value = value

  console.log('自訂參數：', value)
  console.log('Event：', event)
  console.log('觸發事件的元素：', event.target)
}

// keyup：鍵盤按鍵放開時觸發
const handleKeyup = (event) => {
  console.log('目前按鍵：', event.key)
}
</script>

<template>
  <!-- submit：送出表單時觸發 -->
  <form @submit="handleSubmit">
    <!-- Email -->
    <div>
      <label for="email">Email：</label>

      <!--
        input：輸入內容時觸發
        keyup：鍵盤按鍵放開時觸發
      -->
      <input id="email" :value="email" type="email" placeholder="請輸入 Email" @input="handleInput" @keyup="handleKeyup" />
    </div>

    <br />

    <!-- 快速填入帳號 -->
    <div>
      <!-- click：呼叫函式並傳入自訂參數與 $event -->
      <button type="button" @click="handleFillEmail('user@example.com', $event)">
        填入一般帳號
      </button>

      <button type="button" @click="handleFillEmail('admin@example.com', $event)">
        填入管理員帳號
      </button>
    </div>

    <br />

    <!-- 記住我 -->
    <div>
      <!-- change：Checkbox 狀態改變時觸發 -->
      <input id="remember" :checked="remember" type="checkbox" @change="handleChange" />

      <label for="remember">記住我</label>
    </div>

    <br />

    <!-- submit：type="submit" 會觸發 form 的 submit 事件 -->
    <button type="submit">登入</button>
  </form>

  <br />
  <hr />
  <br />

  <!-- 顯示目前資料 -->
  <div>
    <p>Email：{{ email }}</p>
    <p>記住我：{{ remember }}</p>
    <p>登入訊息：『 {{ message }}』</p>
  </div>
</template>
