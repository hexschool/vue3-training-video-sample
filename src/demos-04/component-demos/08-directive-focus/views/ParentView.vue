<script setup>
import LocalFocus from '../components/LocalFocus.vue';
import GlobalFocus from '../components/GlobalFocus.vue';
</script>

<template>
  <div class="file-block" data-name="views/ParentView.vue">
    <!-- 同一時間只有一個輸入框能拿到游標，所以兩個都要按了才出現 -->
    <LocalFocus />
    <GlobalFocus />
  </div>
</template>
