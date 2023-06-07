import { createRouter, createWebHashHistory } from 'vue-router';
import type { App } from 'vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
});

export default function setupRouter(app: App<Element>) {
  app.use(router);
}
