import { createApp } from 'vue';

import App from './App.vue';
import BaseButton from './components/BaseButton.vue';

const app = createApp(App);

// 全域註冊元件：註冊一次，整個 App 都能直接使用 <BaseButton />，不用各自 import
app.component('BaseButton', BaseButton);

app.mount('#app');
