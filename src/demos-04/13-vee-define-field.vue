<script setup>
import { useForm } from 'vee-validate'

const {
  defineField,
  handleSubmit,
} = useForm()

const [email, emailProps] = defineField('email')
const [password, passwordProps] = defineField('password')

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<template>
  <form @submit="onSubmit">
    <input
      v-model="email"
      v-bind="emailProps"
      type="email"
      placeholder="請輸入 Email"
    />

    <input
      v-model="password"
      v-bind="passwordProps"
      type="password"
      placeholder="請輸入密碼"
    />

    <button type="submit">
      登入
    </button>
  </form>
</template>
