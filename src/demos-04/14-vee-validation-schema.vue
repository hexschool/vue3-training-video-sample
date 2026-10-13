<script setup>
import { useForm } from 'vee-validate'

const {
  defineField,
  errors,
  handleSubmit,
} = useForm({
  validationSchema: {
    email(value) {
      if (!value) {
        return '請輸入 Email'
      }

      if (!value.includes('@')) {
        return 'Email 格式不正確'
      }

      return true
    },

    password(value) {
      if (!value) {
        return '請輸入密碼'
      }

      if (value.length < 6) {
        return '密碼至少需要 6 個字元'
      }

      return true
    },
  },
})

const [email, emailProps] = defineField('email', {
  validateOnBlur: false,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: false,
})
const [password, passwordProps] = defineField('password')

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<template>
  <form @submit="onSubmit">
    <div>
      <label for="email">Email：</label>
      <input id="email" v-model="email" v-bind="emailProps" type="email" placeholder="請輸入 Email" />

      <p v-if="errors.email" class="error">{{ errors.email }}</p>
    </div>

    <div>
      <label for="password">密碼：</label>
      <input id="password" v-model="password" v-bind="passwordProps" type="password" placeholder="請輸入密碼" />

      <p v-if="errors.password" class="error">{{ errors.password }}</p>
    </div>

    <button type="submit">
      登入
    </button>
  </form>
</template>

<style scoped>
.error {
  color: #e5534b;
}
</style>
