import { createApp } from 'vue';

import App from './App.vue';
import { vFocus } from './directives/focus.js';

const app = createApp(App);

// 全域註冊指令：註冊一次，整個 App 都能直接使用 v-focus，不用各自 import
// 註冊時名字不加 v，用的時候寫 v-focus
app.directive('focus', vFocus);

app.mount('#app');
