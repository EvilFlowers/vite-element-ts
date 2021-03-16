import { createStore } from 'vuex';
import { App } from 'vue';

const store = createStore({});

export function setupStore(app: App) {
  app.use(store);
}

export default store;
