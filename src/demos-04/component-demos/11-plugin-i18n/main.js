import { createApp } from 'vue';
import App from './App.vue';
import i18nPlugin from './plugins/i18n';

const app = createApp(App);

app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!',
    welcome: 'Bienvenue!'
  }
});

app.mount('#app');
