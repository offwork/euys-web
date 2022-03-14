import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormFieldSchema } from '@euys/shared/ui';
import { FormControl } from '@ngneat/reactive-forms';
import _ from 'lodash';
import { combineLatest, Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { HedeflerFacade } from '../+state/hedefler.facade';
import { Hedef, HedefColumn, Hedefler } from '../+state/hedefler.models';
import { GridInputChangeModel } from '../../models/data-grid-input.model';

@Component({
  selector: 'euys-hedefler',
  templateUrl: './hedefler.component.html',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'page-container' },
})
export class HedeflerComponent implements OnDestroy, OnInit {
  columnsDef = ['TEE', 'NÇO', 'PO', 'KO', 'TEE', 'NÇO', 'PO', 'KO'];
  selectedYear: number;
  loaded$: Observable<boolean>;
  targets$: Observable<Hedef[]>;
  leftTitleList$: Observable<string[]>;
  gridDataSource$: Observable<Hedefler<HedefColumn>>;
  saveDisable$: Observable<boolean>;

  _endSubscription$ = new Subject<boolean>();

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
  ];

  constructor(private facade: HedeflerFacade) {
    this.leftTitleList$ = this.facade.leftTitleList$;
    this.gridDataSource$ = this.facade.dataGrid$;
    this.targets$ = this.facade.targets$;
    this.saveDisable$ = this.facade.invalidGrid$;
    this.loaded$ = this.facade.loaded$;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickOnContinue(event: any) {
    this.selectedYear = event['year'];
    this.facade.load(event['year']);
  }

  clickOnSave() {
    combineLatest([this.gridDataSource$, this.targets$])
      .pipe(take(1), takeUntil(this._endSubscription$))
      .subscribe(([dataGrid, targets]) => {
        const hedefler = _.cloneDeep(targets);
        Object.keys(dataGrid).forEach(key => {
          dataGrid[key].forEach((column, index) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            hedefler[index][`${key}Deger`] = column.value;
          });
        });
        this.facade.save(hedefler, this.selectedYear);
      });
  }

  calculatePercentage(event: GridInputChangeModel) {
    this.facade.updateDataGrid(event);
    // this.facade.verify();
  }

  ngOnInit() {
    this.facade.init();
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }
}
