<script setup>

defineProps({
  name: {
    type: String,
    required: true
  },

  userAge: {
    type: Number,
    default: 18
  },

  role: {
    type: String,
    validator: (value) => {
      return ['admin', 'user'].includes(value)
    }
  }
})
</script>

<template>
  <div class="file-block" data-name="components/UserCard.vue">
    <div>
      <p>姓名：{{ name }}</p>
      <p>年齡：{{ userAge }}</p>
      <p>角色：{{ role }}</p>
    </div>
  </div>
</template>
