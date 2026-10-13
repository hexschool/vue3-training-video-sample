import { createApp } from 'vue';
import App from './App.vue';
import toastPlugin from './plugins/toast';

const app = createApp(App);

// 安裝 Toast Plugin，第二個參數是 options：通知顯示幾毫秒後消失
app.use(toastPlugin, {
  duration: 2000
});

app.mount('#app');
