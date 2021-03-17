import { createStore } from 'vuex';
import { App } from 'vue';
import menus from './modules/menus';

/*const files = import.meta.globEager('./modules/!*.ts');

let modules = {};
for (const path in files) {
  modules[path.replace(/(\.\/modules\/|\.ts)/g, '')] = files[path].default;
}*/

const store = createStore({
  modules: {
    menus,
  },
});

export function setupStore(app: App) {
  app.use(store);
}

export default store;
