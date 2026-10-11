```html
<script setup>
import { ref } from 'vue';

const imageUrl = ref('https://picsum.photos/300/200?random=1');
const isDisabled = ref(false);

const changeImage = () => {
  const random = Math.floor(Math.random() * 100);

  imageUrl.value = `https://picsum.photos/300/200?random=${random}`;
};

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value;
};
</script>

<template>
  <section>
    <h2>v-bind 常見用法</h2>

    <!-- v-bind 簡寫 -->
    <img :src="imageUrl" alt="隨機圖片" width="300" />

    <hr />

    <!-- Boolean Attribute -->
    <button type="button" :disabled="isDisabled" @click="changeImage">
      隨機切換圖片
    </button>

    <button type="button" @click="toggleDisabled">
      切換 disabled 狀態
    </button>
  </section>
</template>
```
