import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { App } from 'vue';
import Layout from '@/layouts/default/index.vue';
import store from '@/store';

export const HomeRoute: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: Layout,
  children: [],
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
  strict: true,
});

router.beforeEach(async (to, _from, next) => {
  const menus = await store.getters['menus/menus'];
  console.log(menus.length);
  if (menus.length === 0) {
    const routes = await store.dispatch('menus/setMenus');
    router.addRoute(routes);
    next({ ...to, replace: true });
  } else {
    next();
  }
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
