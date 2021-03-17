interface Menu {
  id: string;
  version: number;
  sorder: number;
  isdel: boolean;
  name: string;
  url: string;
  permissions: string;
  type: number;
  icon: string;
  parentId: string;
}

enum Menus {
  RootNode = '00000000000000000000000000000000',
}

export function convertRouter(menus: Menu[]) {
  return menus.map((route) => {
    if (route) {
      console.log(Menus.RootNode);
    }
  });
}
