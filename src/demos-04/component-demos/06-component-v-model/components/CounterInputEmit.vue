<script setup>
// 原始寫法：v-model 拆開來就是 modelValue（父傳子）＋ update:modelValue（子通知父）
const props = defineProps({
  modelValue: Number,
});

const emit = defineEmits(['update:modelValue']);

function increase() {
  // props 不能直接改，要 emit 請父元件改
  emit('update:modelValue', props.modelValue + 1);
}
</script>

<template>
  <div class="file-block" data-name="components/CounterInputEmit.vue">
    <p>當前值：{{ modelValue }}</p>
    <button @click="increase">+ 1</button>
  </div>
</template>
