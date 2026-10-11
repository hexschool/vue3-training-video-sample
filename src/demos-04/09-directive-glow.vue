<script setup>
const handleMouseMove = (event) => {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  el.style.setProperty('--x', `${x}px`);
  el.style.setProperty('--y', `${y}px`);
};

const vGlow = {
  mounted(el, binding) {
    el.style.setProperty('--size', `${binding.value ?? 150}px`);
    el.addEventListener('mousemove', handleMouseMove);
  },
  updated(el, binding) {
    el.style.setProperty('--size', `${binding.value ?? 150}px`);
  },
  unmounted(el) {
    el.removeEventListener('mousemove', handleMouseMove);
  }
};
</script>

<template>
  <div v-glow="100" class="card">
    <h3>小光暈</h3>
    <p>將滑鼠移動到卡片上</p>
  </div>

  <div v-glow="200" class="card">
    <h3>大光暈</h3>
    <p>將滑鼠移動到卡片上</p>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 16px;
  padding: 60px 30px;
  text-align: center;
  border-radius: 16px;
  color: white;
  background:
    radial-gradient(
      circle var(--size, 150px)
      at var(--x, 50%) var(--y, 50%),
      rgba(125, 150, 255, 0.6),
      transparent
    ),
    #17233a;
}
</style>
