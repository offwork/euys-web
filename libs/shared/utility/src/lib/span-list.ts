import { filter, findIndex, findLastIndex } from 'lodash';

export type Spanned<T extends unknown> = T & {
  isSpan: boolean;
  isLast: boolean;
  spanSize: number;
};

export function makeSpanList<T, Key extends keyof T>(list: T[], groupKey: Key) {
  const spanList: Spanned<T>[] = list.map((item, index) => ({
    ...item,
    isSpan: findIndex(list, row => row[groupKey] === item[groupKey]) === index,
    isLast:
      findLastIndex(list, row => row[groupKey] === item[groupKey]) === index,
    spanSize: filter(list, { [groupKey]: item[groupKey] }).length,
  }));
  return spanList;
}
