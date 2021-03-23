import { ActionContext } from 'vuex';

interface appState {
  collapse: boolean;
}

const state: appState = {
  collapse: true,
};

const getters = {
  collapse: (state: appState) => state.collapse,
};

const mutations = {
  toggleCollapse(state: appState) {
    state.collapse = !state.collapse;
  },
};

const actions = {
  toggleCollapse({ commit }: ActionContext<appState, any>) {
    commit('toggleCollapse');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
