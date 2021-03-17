import { createRouter, createWebHashHistory } from 'vue-router';
import { App } from 'vue';
import Layout from '@/layouts/default/index.vue';
import store from '@/store';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Layout,
      meta: {
        title: '首页',
        icon: 'home',
      },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Layout,
      meta: {
        title: '工作台',
      },
      children: [
        {
          path: 'workbench',
          name: 'Workbench',
          component: () => import('@/components/HelloWorld.vue'),
          meta: {
            title: '工作台',
          },
        },
      ],
    },
  ],
  strict: true,
});

router.beforeEach(() => {
  store.dispatch('menus/setMenus');
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
