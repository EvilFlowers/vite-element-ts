import { getMenuList } from '@/api/sys/menu';

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
    const menus = await getMenuList('');
    commit('setMenus', menus);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
