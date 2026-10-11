<template>
  <div class="file-block" data-name="components/UserCard.vue">
    <div class="card">
      <header>
        <slot name="header" />
      </header>

      <main>
        <slot />
      </main>

      <footer>
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>
