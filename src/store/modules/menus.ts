import { getMenuList } from '@/api/sys/menu';
import { convertRouter } from '@/utils/menus';

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
    const menuList = convertRouter(menus);
    commit('setMenus', menuList);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
