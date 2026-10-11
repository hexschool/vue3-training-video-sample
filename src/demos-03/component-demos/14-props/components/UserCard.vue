<script setup>
const props = defineProps({
  name: { testName: String },
  userAge: Number
})

// 不可以直接修改 Props，會跳出唯獨警告
// props.name.testName = "BBB"
</script>

<template>
  <div class="file-block" data-name="components/UserCard.vue">
    <div>
      <p>姓名：{{ name }}</p>
      <p>年齡：{{ userAge }}</p>
    </div>
  </div>
</template>
