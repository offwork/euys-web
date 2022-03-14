import { formatNumber } from '@angular/common';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { fromPairs, get } from 'lodash';
import { SortEvent } from 'primeng/api';
import { Table, TableService } from 'primeng/table';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import {
  SpecsTableCol,
  TableHeader,
  TableHeaders,
} from '../models/spesifikasyon.models';

export function tableFactory<T>(datalist: SpesifikasyonTabloComponent<T>) {
  return datalist.table;
}

@Component({
  selector: 'euys-spesifikasyon-tablo',
  templateUrl: './spesifikasyon-tablo.component.html',
  providers: [
    TableService,
    {
      provide: Table,
      useFactory: tableFactory,
      deps: [SpesifikasyonTabloComponent],
    },
  ],
})
export class SpesifikasyonTabloComponent<T> implements OnInit, OnDestroy {
  @ViewChild('table', { static: true }) table!: Table;

  @Input() selected!: T;
  @Input() cols!: SpecsTableCol[];
  @Input() headers: TableHeaders = [];
  @Input() data!: Observable<T[]>;
  @Input() loaded!: Observable<boolean>;
  @Input() dataKey = 'id';
  @Output() updateClick = new EventEmitter<T>();
  @Output() selectedChange = new EventEmitter<T>();
  @ContentChild(TemplateRef)
  headerTemplate!: TemplateRef<HTMLElement>;
  sorted!: Observable<T[]>;
  pageRow = 10;
  pageFirst = 0;
  value!: T[];
  displayValue!: { key: number }[];

  _destroy$ = new Subject<boolean>();

  ngOnInit() {
    if (this.data) {
      this.data
        .pipe(
          tap(_data => {
            this.value = [..._data];

            this.displayValue = _data.map((item, index) => {
              const displayRow = fromPairs(
                this.cols.map(col => [
                  col.field,
                  col.templateFn(this.getFieldValue(item, col)),
                ])
              );

              return { ...item, ...displayRow, key: index };
            });
          }),
          takeUntil(this._destroy$)
        )
        .subscribe();
    }
  }

  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  sort(event: SortEvent) {
    const field = String(event.field);
    if (event.data) {
      event.data.sort((a, b) => (a[field] - b[field]) * Number(event.order));
    }
  }

  get sortField() {
    return this.cols[0].field;
  }

  convertHeaderRow(row: Array<string | TableHeader>) {
    return row.map((column: string | TableHeader) =>
      typeof column === 'string' ? ({ title: column } as TableHeader) : column
    );
  }

  onSelectionChange(row: { key: number } | null) {
    this.selectedChange.emit((row ? this.value[row.key] : null) as T);
  }

  getFieldValue(item: T, col: SpecsTableCol) {
    return get(item, col.getFieldArray(), '');
  }

  getFieldValueFormatted(item: T, col: SpecsTableCol) {
    const value = get(item, col.getFieldArray(), '');
    return typeof value === 'number'
      ? formatNumber(
          value,
          'tr-TR',
          `1.${col.fractionSize}-${col.fractionSize}`
        )
      : value;
  }

  getFieldType(item: T, col: SpecsTableCol) {
    return typeof get(item, col.getFieldArray(), '');
  }
}
