import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormFieldSchema } from '@euys/shared/ui';
import { FormControl } from '@ngneat/reactive-forms';
import { combineLatest, Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { KapasitelerFacade } from '../+state/kapasiteler.facade';
import { Kapasite, Kapasiteler } from '../+state/kapasiteler.models';
import * as _ from 'lodash';
import {
  GridInputChangeModel,
  SimpleColumnData,
} from '../../models/data-grid-input.model';

@Component({
  selector: 'euys-kapasiteler',
  templateUrl: './kapasiteler.component.html',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'page-container' },
})
export class KapasitelerComponent implements OnDestroy, OnInit {
  columnsDef = ['Erdemir', 'Kapasite (ton)'];
  selectedYear: number;
  previousYear: boolean;
  loaded$: Observable<boolean>;
  capacity$: Observable<Kapasite>;
  saveDisable$: Observable<boolean>;
  gridDataSource$: Observable<Kapasiteler<SimpleColumnData>>;
  // New form schema
  filterFormFields: FormFieldSchema[] = [
    {
      formControl: new FormControl<Date>(),
      inputId: 'year',
      label: 'Yıl Seçin',
      dateFormat: 'yy',
      horizontal: true,
      type: 'year',
      view: 'month',
      yearNavigator: true,
      yearRange: '2000:2030',
    },
    {
      formControl: new FormControl<boolean>(),
      inputId: 'previousYear',
      label: 'Önceki Yıl',
      type: 'boolean',
      binary: true,
    },
  ];

  _endSubscription$ = new Subject<boolean>();

  constructor(private facade: KapasitelerFacade) {
    this.gridDataSource$ = this.facade.dataGrid$;
    this.saveDisable$ = this.facade.invalidGrid$;
    this.capacity$ = this.facade.capatiy$;
    this.loaded$ = this.facade.loaded$;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickOnContinue(event: any) {
    this.facade.load(event['year'], event['previousYear']);
    this.selectedYear = event['year'];
    this.previousYear = event['previousYear'];
  }

  clickOnSave() {
    combineLatest([this.gridDataSource$, this.capacity$])
      .pipe(take(1), takeUntil(this._endSubscription$))
      .subscribe(([dataGrid, capatiy]) => {
        const kapasite = _.omit(capatiy, ['idx', 'yil', 'etag']);
        Object.keys(kapasite).forEach((key, idx) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          kapasite[key] = dataGrid['value'][idx].value;
        });
        const kapasiteler = { ..._.cloneDeep(capatiy), ...kapasite };
        this.facade.save(kapasiteler, this.selectedYear, this.previousYear);
      });
  }

  inputOnBlur(event: GridInputChangeModel) {
    this.facade.update(event);
    this.facade.verify(event.column);
  }

  ngOnInit() {
    this.facade.init();
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }
}
