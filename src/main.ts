import { createApp } from 'vue';
import App from './App.vue';
import { setElementPlus } from '@/plugins/element-plus';
import router, { setupRouter } from '@/router';
import { setupStore } from '@/store';
import { setupFontAwesome } from '@/plugins/fontAwesome';
import 'element-plus/lib/theme-chalk/index.css';

import '@/styles/index.scss';

(async () => {
  const app = createApp(App);

  setElementPlus(app);

  setupRouter(app);

  setupStore(app);
  setupFontAwesome(app);

  await router.isReady();

  app.mount('#app');
})();
