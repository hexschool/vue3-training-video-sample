import { createApp } from 'vue';
import App from './App.vue';
import myPlugin from './plugins/myPlugin';

const app = createApp(App);

app.use(myPlugin, {
  message: 'Hello Vue!'
});

app.mount('#app');
