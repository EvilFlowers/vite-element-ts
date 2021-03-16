import ElementPlus from 'element-plus';
import { App } from 'vue';

export function setElementPlus(app: App) {
  app.use(ElementPlus);
}
