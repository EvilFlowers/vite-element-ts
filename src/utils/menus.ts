import { RouteRecordRaw } from 'vue-router';
import { isExternal } from '@/utils/validate';
import { HomeRoute } from '@/router';

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
  SubMenuUrl = '-',
}

export const convertMenus = (menus: Menu[], rootId: string = Menus.RootNode) => {
  const menuList: Menu[] = menus.filter((menu) => menu.parentId === rootId);
  menuList.forEach((menu) => {
    menu.children = menus.filter((m) => m.parentId === menu.id);
    /*let menus1 = convertMenus(menus, menu.id);
    if (menus1.length > 0) {
      menu.children = menus1;
    } else {
      return;
    }*/
  });
  return menuList;
};

export const convertRouter = (menuList: Menu[], routes: RouteRecordRaw = HomeRoute) => {
  menuList.forEach((menu) => {
    let route: RouteRecordRaw;
    if (menu.url !== Menus.SubMenuUrl && !isExternal(menu.url)) {
      route = {
        path: menu.url,
        name: menu.url,
        component: () => import(`../views${menu.url}/index.vue`),
        meta: {
          title: menu.name,
        },
      };
      routes.children?.push(route);
      /*if (menuList[i].children && menuList[i].children.length > 0) {
        convertRouter(menuList[i].children, route);
      }*/
    }
  });
  return routes;
};
