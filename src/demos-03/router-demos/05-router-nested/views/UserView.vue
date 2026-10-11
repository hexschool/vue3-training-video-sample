<template>
  <div class="file-block" data-name="views/UserView.vue">
    <div class="user-layout">
      <aside class="sidebar">
        <h2>會員中心</h2>

        <nav>
          <RouterLink to="/users/profile">
            個人資料
          </RouterLink>

          <RouterLink to="/users/settings">
            設定
          </RouterLink>
        </nav>
      </aside>

      <main class="content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.user-layout {
  display: flex;
}

.sidebar {
  width: 200px;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.content {
  flex: 1;
}
</style>
