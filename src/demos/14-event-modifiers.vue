<script setup>
// .prevent：阻止表單預設送出行為
const handleSubmit = () => {
  console.log('表單送出')
}

// .stop：內層按鈕事件
const handleInnerClick = () => {
  console.log('內層按鈕被點擊')
}

// .stop：外層區塊事件
const handleOuterClick = () => {
  console.log('外層區塊被點擊')
}

// .self：只有點擊元素本身才執行
const handleSelfClick = () => {
  console.log('點擊到外層元素本身')
}

// .once：只會執行一次
const handleOnceClick = () => {
  console.log('這個事件只會觸發一次')
}

// .capture：外層捕獲事件
const handleCaptureOuter = () => {
  console.log('外層事件先執行')
}

// .capture：內層事件
const handleCaptureInner = () => {
  console.log('內層事件後執行')
}
</script>

<template>
  <p>這一支的效果都印在 console，記得打開開發者工具。</p>

  <!-- .prevent -->
  <section>
    <h2>.prevent</h2>

    <p>阻止事件的預設行為，例如避免表單送出時重新整理頁面。</p>

    <form @submit.prevent="handleSubmit">
      <button type="submit">送出表單</button>
    </form>
  </section>

  <hr />

  <!-- .stop -->
  <section>
    <h2>.stop</h2>

    <p>停止事件冒泡，避免內層事件繼續觸發外層事件。</p>

    <div class="outer-container" @click="handleOuterClick">
      外層區塊

      <button type="button" @click.stop="handleInnerClick">點擊內層按鈕</button>
    </div>
  </section>

  <hr />

  <!-- .self -->
  <section>
    <h2>.self</h2>

    <p>只有事件由元素本身觸發時才執行。</p>

    <div class="outer-container" @click.self="handleSelfClick">
      點擊這個外層區塊會觸發事件

      <button type="button">點擊這個按鈕不會觸發外層事件</button>
    </div>
  </section>

  <hr />

  <!-- .once -->
  <section>
    <h2>.once</h2>

    <p>事件處理函式只會執行一次。</p>

    <button type="button" @click.once="handleOnceClick">只能觸發一次</button>
  </section>

  <hr />

  <!-- .capture -->
  <section>
    <h2>.capture</h2>

    <p>在事件捕獲階段處理事件，外層事件會先執行。</p>

    <div class="outer-container" @click.capture="handleCaptureOuter">
      外層區塊

      <button type="button" @click="handleCaptureInner">點擊內層按鈕</button>
    </div>
  </section>
</template>

<style scoped>
.outer-container {
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>
