import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { App } from 'vue';
import Layout from '@/layouts/default/index.vue';
import store from '@/store';

export const HomeRoute: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: Layout,
  redirect: 'welcome',
  children: [
    {
      path: '/welcome',
      name: '/welcome',
      component: () => import('@/views/welcome/index.vue'),
      meta: {
        affix: true,
        title: '首页',
      },
    },
  ],
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
});

router.beforeEach(async (to, _from, next) => {
  const menus = await store.getters['menus/menus'];
  console.log(menus.length);
  if (menus.length === 0) {
    const routes = await store.dispatch('menus/setMenus');
    router.addRoute(routes);
    /*routes.forEach((route) => {
      router.addRoute('Home', route);
    });*/
    next({ ...to, replace: true });
  } else {
    next();
  }
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
