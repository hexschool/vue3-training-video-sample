<script setup>
import { ref } from 'vue'

const message = ref('尚未觸發按鍵')

// Enter
const handleEnter = () => {
  message.value = '按下 Enter'
}

// Escape
const handleEsc = () => {
  message.value = '按下 Escape'
}

// Space
const handleSpace = () => {
  message.value = '按下 Space'
}

// Ctrl + Enter
const handleCtrlEnter = () => {
  message.value = '按下 Ctrl + Enter'
}

// 精確的 Ctrl + Enter
const handleCtrlExactEnter = () => {
  message.value = '精確按下 Ctrl + Enter'
}
</script>

<template>
  <section>
    <h2>鍵盤修飾符</h2>

    <p>點擊輸入框取得焦點後，再測試指定的鍵盤按鍵。</p>

    <!-- 單一按鍵 -->
    <div>
      <label for="single-key">單一按鍵：</label>
      <input id="single-key" type="text" placeholder="Enter / Esc / Space" @keyup.enter="handleEnter"
        @keyup.esc="handleEsc" @keyup.space="handleSpace" />
    </div>

    <br />

    <!-- 組合鍵 -->
    <div>
      <label for="combo-key">組合鍵：</label>
      <input id="combo-key" type="text" placeholder="Ctrl + Enter" @keydown.ctrl.enter="handleCtrlEnter" />
    </div>

    <br />

    <!-- 精確組合鍵 -->
    <div>
      <label for="exact-key">精確組合鍵：</label>
      <input id="exact-key" type="text" placeholder="Ctrl + Enter（exact）"
        @keydown.ctrl.enter.exact="handleCtrlExactEnter" />
    </div>

    <p>觸發結果：{{ message }}</p>
  </section>
</template>
