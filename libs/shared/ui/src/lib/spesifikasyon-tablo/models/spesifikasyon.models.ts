import { FilterMatchMode } from 'primeng/api';
import { Observable, of as observableOf } from 'rxjs';

export class SpecsTableCol {
  static readonly DEFAULT_FILTER_TYPE = 'text';
  static readonly DEFAULT_MATCHMODE = FilterMatchMode.STARTS_WITH;

  field: string;
  fractionSize = 0;
  filterType: 'text' | 'select' = SpecsTableCol.DEFAULT_FILTER_TYPE;
  matchMode: 'equals' | 'contains' | 'startsWith' =
    SpecsTableCol.DEFAULT_MATCHMODE;
  options$: Observable<string[]> = observableOf([]);

  constructor(field: string) {
    this.field = field;
  }

  templateFn: (value: unknown) => unknown = value => value;

  template(templateFn: (value: unknown) => unknown) {
    this.templateFn = templateFn;
    return this;
  }

  match(matchMode: 'equals' | 'contains' | 'startsWith') {
    this.matchMode = matchMode;
    return this;
  }

  filter(filterType: 'text' | 'select') {
    this.filterType = filterType;
    return this;
  }

  filterWith(options: string[] | Observable<string[]>) {
    this.filterType = 'select';
    this.options$ =
      options instanceof Observable ? options : observableOf(options);
    this.matchMode = FilterMatchMode.EQUALS;

    return this;
  }

  decimalSize(decimalSize: number) {
    this.fractionSize = decimalSize;
    return this;
  }

  getFieldArray() {
    return this.field.split('.');
  }
}

export interface TableHeader {
  title: string;
  colspan?: number;
  rowspan?: number;
  sort?: string;
}

export type TableHeaders = Array<Array<string | TableHeader>>;
