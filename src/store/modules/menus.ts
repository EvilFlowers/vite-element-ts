import { getMenuList } from '@/api/sys/menu';
import { convertMenus, convertRouter, Menu } from '@/utils/menus';
import { RouteRecordRaw } from 'vue-router';

interface menuState {
  menus: Menu[];
  routes: RouteRecordRaw[];
}

const state = () => ({
  menus: [],
  routes: [],
});

const getters = {
  menus: (state: menuState) => state.menus,
  routes: (state: menuState) => state.routes,
};

const mutations = {
  setMenus(state: menuState, menus: []) {
    state.menus = menus;
  },
  setRoutes(state: menuState, routes: RouteRecordRaw) {
    state.routes = [routes];
  },
};

const actions = {
  async setMenus({ commit }: any) {
    const menus: any = await getMenuList('');
    const menuList = convertMenus(menus);
    const routes = await convertRouter(menus);
    commit('setMenus', menuList);
    commit('setRoutes', routes);
    return routes;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
