<script setup>
defineProps({
  name: String
})

const emit = defineEmits(['random-user'])

const handleClick = () => {
  emit('random-user')
}
</script>

<template>
  <div class="file-block" data-name="components/UserCard.vue">
    <p>姓名：{{ name }}</p>
    <button @click="handleClick">
      隨機換人
    </button>
  </div>
</template>
