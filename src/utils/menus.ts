import { RouteRecordRaw } from 'vue-router';

export interface Menu {
  id: string;
  version: number;
  sorder: number;
  isdel: boolean;
  name: string;
  url: string;
  permissions: string;
  type: number;
  icon?: string;
  parentId: string;
  children: Menu[];
}

enum Menus {
  RootNode = '00000000000000000000000000000000',
}

export const convertRouter = (menus: Menu[], rootId: string = Menus.RootNode) => {
  console.log(menus);
  console.log(rootId);
  const routes: RouteRecordRaw[] = [];
  const menuList: Menu[] = menus.filter((menu) => menu.parentId === rootId);
  let path: string;
  if (rootId === Menus.RootNode) {
    path = '@/layouts/default/index.vue';
  }
  for (let i = 0; i < menuList.length; i++) {
    path = `@/${menuList[i].url}.vue`;
    const route: RouteRecordRaw = {
      path: menuList[i].url,
      name: menuList[i].name,
      component: () => require(path),
    };
    routes.push(route);
    menuList[i].children = menus.filter((menu) => menu.parentId === menuList[i].id);
    if (menuList[i].children.length > 0) {
      convertRouter(menuList[i].children, menuList[i].id);
    }
  }
  console.log(routes);
  console.log(menuList);
  return menuList;
};
