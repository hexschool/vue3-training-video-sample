const handleMouseMove = (event) => {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  el.style.setProperty('--x', `${x}px`);
  el.style.setProperty('--y', `${y}px`);
};

export const vGlow = {
  mounted(el, binding) {
    el.style.setProperty('--size', `${binding.value ?? 150}px`);
    el.addEventListener('mousemove', handleMouseMove);
  },
  updated(el, binding) {
    console.log('updated', binding)
    el.style.setProperty('--size', `${binding.value ?? 150}px`);
  },
  unmounted(el) {
    el.removeEventListener('mousemove', handleMouseMove);
  }
};
