import { service } from '@/utils/request';

enum Api {
  GetMenuList = '/getMenuList',
}

export const getMenuList = (params: string) => {
  return service.get(Api.GetMenuList, { params });
};
