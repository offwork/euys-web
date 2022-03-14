export interface Treeview {
  id: number;
  label: string;
  indent: number;
}

export type DataGridRecord = Record<string, Array<ColumnData>>;

export interface ColumnData {
  unit: string;
  sign: number;
  parent: number;
  percent: number;
  entry: string;
  order: number;
}

export interface GridInputChangeModel {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item?: any;
  inputValue: string;
  column: string;
}

export type SimpleDataGridRecord = Record<string, Array<SimpleColumnData>>;

export interface SimpleColumnData {
  row: number;
  // TODO: the value prop must be of `unknown` type instead of `number` type
  value: number;
  total?: boolean;
  context?: string;
  column: string;
}
