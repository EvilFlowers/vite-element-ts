import { createStore } from 'vuex';
import { App } from 'vue';
import menus from './modules/menus';
import tabsBar from './modules/tabsBar';
import app from './modules/app';

/*const files = import.meta.globEager('./modules/!*.ts');

let modules = {};
for (const path in files) {
  modules[path.replace(/(\.\/modules\/|\.ts)/g, '')] = files[path].default;
}*/

const store = createStore({
  modules: {
    menus,
    tabsBar,
    app,
  },
});

export function setupStore(app: App) {
  app.use(store);
}

export default store;
