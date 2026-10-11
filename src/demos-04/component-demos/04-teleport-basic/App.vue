<template>
  <!-- Modal 移動到 body -->
  <Teleport to="body">
    <div class="modal-overlay">
      <div class="modal">
        <h2>確認刪除</h2>
        <p>確定要刪除這筆資料嗎？</p>
        <button>取消</button>
        <button>確認刪除</button>
      </div>
    </div>
  </Teleport>

  <!-- Toast 移動到指定容器 -->
  <Teleport to="#toast-root">
    <div class="toast">
      <strong>操作成功</strong>
      <p>資料已成功儲存！</p>
    </div>
  </Teleport>
</template>
