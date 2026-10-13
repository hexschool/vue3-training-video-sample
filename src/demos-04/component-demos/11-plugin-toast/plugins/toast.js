import { ref } from 'vue';
import ToastContainer from '../components/ToastContainer.vue';

// 建立 Toast 共用服務：存通知清單，提供 success / error 兩個方法
function createToastService(duration) {
  const messages = ref([]);
  let id = 0;

  function show(type, text) {
    const message = { id: id++, type, text };
    messages.value.push(message);

    // 時間到就從清單移除，畫面上的通知跟著消失
    setTimeout(() => {
      const index = messages.value.findIndex((item) => item.id === message.id);
      messages.value.splice(index, 1);
    }, duration);
  }

  return {
    messages,
    success: (text) => show('success', text),
    error: (text) => show('error', text),
  };
}

export default {
  install(app, options) {
    // 建立 Toast 共用服務
    const toast = createToastService(options.duration);

    // 提供給所有 Component 使用：元件裡用 inject('toast') 拿到
    app.provide('toast', toast);

    // 註冊全域 Toast 元件：任何地方都能直接寫 <AppToast />，不用 import
    app.component('AppToast', ToastContainer);
  }
};
