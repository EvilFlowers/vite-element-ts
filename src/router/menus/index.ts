import router from '@/router';

export const getMenus = () => {
  const routes = router.getRoutes();
  return routes;
};
