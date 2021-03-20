import { RouteLocationNormalized } from 'vue-router';
import { ActionContext } from 'vuex';

interface TabsState {
  visitedRoutes: RouteLocationNormalized[];
}

const state: TabsState = {
  visitedRoutes: [],
};

const getters = {
  visitedRoutes: (state: TabsState) => state.visitedRoutes,
};

const mutations = {
  addVisitedRoute(state: TabsState, route: RouteLocationNormalized) {
    let target = state.visitedRoutes.find((item) => item.path === route.path);
    if (target) {
      if (route.fullPath !== target.fullPath) Object.assign(target, route);
      return;
    }
    state.visitedRoutes.push(Object.assign({}, route));
  },
  delVisitedRoute(state: TabsState, route: RouteLocationNormalized) {
    state.visitedRoutes.forEach((item, index) => {
      if (item.path === route.path) state.visitedRoutes.splice(index, 1);
    });
  },
  delOtherVisitedRoute(state: TabsState, route: RouteLocationNormalized) {
    state.visitedRoutes = state.visitedRoutes.filter((item) => item.meta.affix || item.path === route.path);
  },
  delLeftVisitedRoute(state: TabsState, route: RouteLocationNormalized) {
    let index = state.visitedRoutes.length;
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item);
      return item.meta.affix || index <= state.visitedRoutes.indexOf(item);
    });
  },
  delRightVisitedRoute(state: TabsState, route: RouteLocationNormalized) {
    let index = state.visitedRoutes.length;
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item);
      return item.meta.affix || index >= state.visitedRoutes.indexOf(item);
    });
  },
  delAllVisitedRoutes(state: TabsState) {
    state.visitedRoutes = state.visitedRoutes.filter((item) => item.meta.affix);
  },
};

const actions = {
  addVisitedRoute({ commit }: ActionContext<TabsState, any>, route: RouteLocationNormalized) {
    commit('addVisitedRoute', route);
  },
  async delRoute({ dispatch, state }: ActionContext<TabsState, any>, route: RouteLocationNormalized) {
    await dispatch('delVisitedRoute', route);
    return {
      visitedRoutes: [...state.visitedRoutes],
    };
  },
  delVisitedRoute({ commit, state }: ActionContext<TabsState, any>, route: RouteLocationNormalized) {
    commit('delVisitedRoute', route);
    return [...state.visitedRoutes];
  },
  async delOtherRoutes({ dispatch, state }: ActionContext<TabsState, any>, route: RouteLocationNormalized) {
    await dispatch('delOtherVisitedRoute', route);
    return {
      visitedRoutes: [...state.visitedRoutes],
    };
  },
  async delLeftRoutes({ dispatch, state }: ActionContext<TabsState, any>, route: RouteLocationNormalized) {
    await dispatch('delLeftVisitedRoute', route);
    return {
      visitedRoutes: [...state.visitedRoutes],
    };
  },
  async delRightRoutes({ dispatch, state }: ActionContext<TabsState, any>, route: RouteLocationNormalized) {
    await dispatch('delRightVisitedRoute', route);
    return {
      visitedRoutes: [...state.visitedRoutes],
    };
  },
  delOtherVisitedRoute({ commit, state }: ActionContext<TabsState, any>, route: RouteLocationNormalized) {
    commit('delOtherVisitedRoute', route);
    return [...state.visitedRoutes];
  },
  delLeftVisitedRoute({ commit, state }: ActionContext<TabsState, any>, route: RouteLocationNormalized) {
    commit('delLeftVisitedRoute', route);
    return [...state.visitedRoutes];
  },
  delRightVisitedRoute({ commit, state }: ActionContext<TabsState, any>, route: RouteLocationNormalized) {
    commit('delRightVisitedRoute', route);
    return [...state.visitedRoutes];
  },
  async delAllRoutes({ dispatch, state }: ActionContext<TabsState, any>) {
    await dispatch('delAllVisitedRoutes');
    return {
      visitedRoutes: [...state.visitedRoutes],
    };
  },
  delAllVisitedRoutes({ commit, state }: ActionContext<TabsState, any>) {
    commit('delAllVisitedRoutes');
    return [...state.visitedRoutes];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
