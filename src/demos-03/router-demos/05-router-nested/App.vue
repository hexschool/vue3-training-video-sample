<template>
  <div class="file-block" data-name="App.vue">
    <RouterView />
  </div>
</template>

<style>
/* 每個檔案最外層的 div：虛線框加上檔名，看得出畫面上哪一塊是哪個檔案 */
body {
  font-family: system-ui, sans-serif;
  margin: 32px;
}

.file-block {
  position: relative;
  margin-top: 12px;
  padding: 20px 16px 12px;
  border: 2px dashed #42b883;
  border-radius: 8px;
}

.file-block::before {
  content: attr(data-name);
  position: absolute;
  top: -11px;
  left: 12px;
  padding: 0 6px;
  background: #fff;
  color: #42b883;
  font-size: 13px;
  font-weight: 600;
}
</style>
