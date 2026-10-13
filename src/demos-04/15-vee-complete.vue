<script setup>
import { useForm } from 'vee-validate';

const { defineField, errors, handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: {
    email(value) {
      if (!value) {
        return '請輸入 Email';
      }

      if (!value.includes('@')) {
        return 'Email 格式不正確';
      }

      return true;
    },

    password(value) {
      if (!value) {
        return '請輸入密碼';
      }

      if (value.length < 6) {
        return '密碼至少需要 6 個字元';
      }

      return true;
    },
  },
});

const [email, emailProps] = defineField('email');
const [password, passwordProps] = defineField('password');

const onSubmit = handleSubmit(async (values) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  console.log(values);
});
</script>

<template>
  <form @submit="onSubmit">
    <div>
      <label for="email">Email：</label>

      <input id="email" v-model="email" v-bind="emailProps" type="email" />

      <p class="error">{{ errors.email }}</p>
    </div>

    <div>
      <label for="password">密碼：</label>

      <input id="password" v-model="password" v-bind="passwordProps" type="password" />

      <p class="error">{{ errors.password }}</p>
    </div>

    <button type="submit" :disabled="isSubmitting">登入</button>
    <button type="button" @click="resetForm">清空</button>
  </form>
</template>

<style scoped>
.error {
  color: #e5534b;
}
</style>
