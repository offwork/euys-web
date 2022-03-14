import { Component } from '@angular/core';
import { FormControl } from '@ngneat/reactive-forms';
import { OverlayPanel } from 'primeng/overlaypanel';
import { EMPTY, Observable, of, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  startWith,
  switchMap,
  filter,
  map,
  shareReplay,
  tap,
  finalize,
} from 'rxjs/operators';
import {
  GenislikKaliteKalinik,
  genislikCols,
  ImalatLotTonaj,
  GenislikCol,
} from '../../../models';
import { KaliteService } from '../../../services/kalite.service';

const KEYS = ['kalite', 'kalinlik'] as const;
type KaliteKalinlik = typeof KEYS[number];
type ColumnField = KaliteKalinlik | GenislikCol | string;
type Column = {
  field: ColumnField;
  header: string;
};

@Component({
  selector: 'euys-dynamic-cols',
  templateUrl: './dynamic-cols.component.html',
  styles: [``],
})
export class DynamicColsComponent {
  cols$: Observable<Column[]>;
  values$: Observable<GenislikKaliteKalinik[]>;
  mlnData$: Observable<ImalatLotTonaj[] | never> = EMPTY;
  mlnCols = [
    { field: 'mln', header: 'MLN Numarası' },
    { field: 'tonaj', header: 'Tonaj' },
  ];
  private loadingSubject = new Subject<boolean>();
  loading$: Observable<boolean>;

  baseCols = genislikCols;
  dropdownOptions = [
    { value: 'kalite', label: 'Kalite' },
    { value: 'kalinlik', label: 'Kalınlık' },
  ];
  dropdown: FormControl<KaliteKalinlik> = new FormControl('kalite');
  constructor(private readonly kaliteService: KaliteService) {
    this.loading$ = this.loadingSubject.pipe(startWith(false));
    this.values$ = this.dropdown.valueChanges.pipe(
      startWith('kalite'),
      distinctUntilChanged(),
      switchMap(field => {
        this.loadingSubject.next(true);
        const resultObs = KEYS.includes(field as KaliteKalinlik)
          ? this.kaliteService.findAll(field as KaliteKalinlik)
          : of([]);
        return resultObs.pipe(
          finalize(() => {
            this.loadingSubject.next(false);
          })
        );
      })
    );

    this.cols$ = this.dropdown.valueChanges.pipe(
      startWith('kalite'),
      filter(field => KEYS.includes(field as KaliteKalinlik)),
      map(field => this.getCols(field as KaliteKalinlik)),
      shareReplay(1)
    );
  }

  getCols(field: KaliteKalinlik): Column[] {
    const x = field as ColumnField;
    return [
      {
        field: x,
        header: field.toLocaleUpperCase('tr-TR'),
      },
    ].concat(
      genislikCols.map(col => ({
        field: col as ColumnField,
        header: col.toString(),
      }))
    );
  }

  onClickCell(
    event: MouseEvent,
    colField: GenislikCol | string,
    row: GenislikKaliteKalinik,
    overlay: OverlayPanel
  ) {
    if (typeof colField === 'string') {
      return;
    }
    if (row.kalite) {
      this.mlnData$ = this.kaliteService.findMlnDataByKalite(
        row.kalite,
        colField
      );
    } else if (row.kalinlik) {
      this.mlnData$ = this.kaliteService.findMlnDataByKalinlik(
        row.kalinlik,
        colField
      );
    }

    overlay.show(event);
  }
}
