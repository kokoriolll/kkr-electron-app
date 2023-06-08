import { createApp } from 'vue';
import './style.css';
import { setupStore } from '@/store';
import App from './App.vue';
import setupRouter from './router';

async function bootstrap() {
  const app = createApp(App);

  setupRouter(app);

  setupStore(app);

  app.mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'));
}

bootstrap();
