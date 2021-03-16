import { createRouter, createWebHashHistory } from 'vue-router';
import { App } from 'vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default/index.vue'),
      meta: {},
    },
  ],
  strict: true,
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
