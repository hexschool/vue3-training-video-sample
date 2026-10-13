<script setup>
import { ref } from 'vue';
// 在 <script setup> 裡 import 名字是 v 開頭的變數，template 就能用 v-glow
import { vGlow } from '../directives/glow.js';

// 用 ref 傳值給 v-glow，值變了就會觸發指令的 updated
const size = ref(150);
</script>

<template>
  <div class="file-block" data-name="views/ParentView.vue">
    <div v-glow="100" class="card">
      <h3>小光暈</h3>
      <p>將滑鼠移動到卡片上</p>
    </div>

    <div v-glow="200" class="card">
      <h3>大光暈</h3>
      <p>將滑鼠移動到卡片上</p>
    </div>

    <p>
      size：{{ size }}
      <button @click="size -= 50">變小</button>
      <button @click="size += 50">變大</button>
    </p>

    <!-- 按按鈕改 size，打開 Console 會看到 updated 被觸發 -->
    <div v-glow="size" class="card">
      <h3>用 ref 控制大小</h3>
      <p>將滑鼠移動到卡片上</p>
    </div>
  </div>
</template>
