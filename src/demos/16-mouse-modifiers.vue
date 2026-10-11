<script setup>
const handleLeftClick = () => {
  alert('使用主要按鍵點擊')
}

const handleRightClick = () => {
  alert('使用次要按鍵點擊')
}

const handleMiddleClick = () => {
  alert('使用輔助按鍵點擊')
}
</script>

<template>
  <button @mousedown.left="handleLeftClick">
    主要按鍵
  </button>

  <button @mousedown.right="handleRightClick">
    次要按鍵
  </button>

  <button @mousedown.middle="handleMiddleClick">
    輔助按鍵
  </button>
</template>