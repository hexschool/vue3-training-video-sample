<script setup>
import { useForm } from 'vee-validate'

// 建立表單，取得欄位管理與送出功能
const {
  defineField,
  handleSubmit,
} = useForm()

// 建立 email 欄位
// email：欄位目前的值
// emailProps：提供輸入框需要綁定的事件與屬性
const [email, emailProps] = defineField('email')

// 建立 password 欄位
const [password, passwordProps] = defineField('password')

// 處理表單送出
// values：包含目前表單所有欄位的資料
const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<template>
  <form @submit="onSubmit">
    <!-- v-model 綁定欄位值，v-bind 綁定欄位相關事件與屬性 -->
    <div>
      <label for="email">Email：</label>
      <input id="email" autocomplete="off" v-model="email" v-bind="emailProps" type="email" placeholder="請輸入 Email" />
    </div>

    <div>
      <label for="password">密碼：</label>
      <input id="password" autocomplete="off" v-model="password" v-bind="passwordProps" type="password"
        placeholder="請輸入密碼" />
    </div>

    <button type="submit">
      登入
    </button>
  </form>
</template>