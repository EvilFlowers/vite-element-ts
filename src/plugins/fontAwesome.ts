import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { App } from 'vue';

library.add(fas);
export function setupFontAwesome(app: App) {
  app.component('font-awesome-icon', FontAwesomeIcon);
}
