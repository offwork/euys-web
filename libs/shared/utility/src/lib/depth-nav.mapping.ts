import { Navs } from '@euys/api-interfaces';
import * as _ from 'lodash';
/* eslint-disable @typescript-eslint/no-explicit-any */
export function* depthNavMapping(source: Navs[]): any {
  if (!source && Array.isArray(source)) {
    return;
  }

  for (let i = 0; i < source.length; i++) {
    const navs = source[i];

    if (navs.altModuller && navs.altModuller.length > 0) {
      yield navs.altModuller.map((val) => ({
        label: val.modulAd,
        icon: 'pi pi-fw pi-file',
        routerLink: [`${val.runModul}`],
        parent: val.ustModulAd,
        child: !!val.altModuller,
      }));
      yield* depthNavMapping(navs.altModuller);
    }
  }
}

export function transformToTree(arr: any[]) {
  const nodes = {} as any;
  return arr.filter((obj) => {
    const id = obj['label'],
      parentId = obj['parent'];
    nodes[id] = _.defaultsDeep(obj, nodes[id], { items: [] });
    parentId && (nodes[parentId] = nodes[parentId] || { items: [] })['items'].push(obj);
    return !parentId;
  });
}
