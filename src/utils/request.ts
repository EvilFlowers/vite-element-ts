import axios from 'axios';
import qs from 'qs';
import { App } from 'vue';

const service = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

service.interceptors.request.use((config) => {
  return config;
});

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const get = (url: string, params: {}, fun: Function, err?: Function) => {
  service
    .get(url, { params })
    .then((response) => {
      return fun ? fun(response) : Promise.resolve(response);
    })
    .catch((error) => {
      return err ? err(error) : Promise.reject(error);
    });
};

const post = (url: string, data: {}, fun: Function, err: Function) => {
  service
    .post(url, qs.stringify(data))
    .then((response) => {
      return fun ? fun(response) : Promise.resolve(response);
    })
    .catch((error) => {
      return err ? err(error) : Promise.reject(error);
    });
};

export { service, get, post };
export function setGlobalAxios(app: App) {
  app.config.globalProperties.get = get;
  app.config.globalProperties.post = post;
  app.config.globalProperties.service = service;
}
