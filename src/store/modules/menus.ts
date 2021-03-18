import { getMenuList } from '@/api/sys/menu';
import { convertMenus, convertRouter } from '@/utils/menus';

const state = () => ({
  menus: [],
});

const getters = {
  menus: (state: any) => state.menus,
};

const mutations = {
  setMenus(state: any, menus: []) {
    state.menus = menus;
  },
};

const actions = {
  async setMenus({ commit }: any) {
    const menus: any = await getMenuList('');
    const menuList = convertMenus(menus);
    const routes = await convertRouter(menus);
    commit('setMenus', menuList);
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
