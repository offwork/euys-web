import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormFieldSchema } from '@euys/shared/ui';
import { FormControl } from '@ngneat/reactive-forms';
import { combineLatest, Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { KsyfStandartHatHiziFacade } from '../+state/ksyf-standart-hat-hizi.facade';
import {
  StandartHiz,
  StandarHizlar,
} from '../+state/ksyf-standart-hat-hizi.models';
import * as _ from 'lodash';
import {
  GridInputChangeModel,
  SimpleColumnData,
} from '../../models/data-grid-input.model';

@Component({
  selector: 'euys-ksy-firinlar-standart-hiz',
  templateUrl: './ksy-firinlar-standart-hiz.component.html',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'page-container' },
})
export class KsyFirinlarStandartHizComponent implements OnDestroy, OnInit {
  columnsDef = ['Hat', 'Maksimum Hız (ton/saat)'];
  selectedYear: number;
  loaded$: Observable<boolean>;
  gridDataSource$: Observable<StandartHiz<SimpleColumnData>>;
  standartHiz$: Observable<StandarHizlar>;
  saveDisable$: Observable<boolean>;
  // New form schema
  filterFormFields: FormFieldSchema[];
  _endSubscription$ = new Subject<boolean>();

  constructor(private facade: KsyfStandartHatHiziFacade) {
    this.gridDataSource$ = this.facade.dataGrid$;
    this.saveDisable$ = this.facade.invalidGrid$;
    this.standartHiz$ = this.facade.standartHiz$;
    this.loaded$ = this.facade.loaded$;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickOnContinue(event: any) {
    this.facade.load(event['year']);
    this.selectedYear = event['year'];
  }

  clickOnSave() {
    combineLatest([this.gridDataSource$, this.standartHiz$])
      .pipe(take(1), takeUntil(this._endSubscription$))
      .subscribe(([dataGrid, standartHiz]) => {
        const hizlar = _.pick(standartHiz, [
          'kokMaxHiz',
          'sinterMaxHiz',
          'yf1MaxHiz',
          'yf2MaxHiz',
        ]);
        hizlar.kokMaxHiz = dataGrid['value'][0].value;
        hizlar.sinterMaxHiz = dataGrid['value'][1].value;
        hizlar.yf1MaxHiz = dataGrid['value'][2].value;
        hizlar.yf2MaxHiz = dataGrid['value'][3].value;
        const ksyfStandartHiz = { ..._.cloneDeep(standartHiz), ...hizlar };
        this.facade.save(ksyfStandartHiz, this.selectedYear);
      });
  }

  inputOnBlur(event: GridInputChangeModel) {
    this.facade.update(event);
    this.facade.verify(event.column);
  }

  ngOnInit() {
    this.facade.init();

    this.filterFormFields = [
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formControl: new FormControl<any>(),
        inputId: 'hatlar',
        label: 'Hatlar',
        placeholder: 'Bir Hat Seçin...',
        horizontal: true,
        type: 'array',
        options: this.facade.lines$,
        optionLabel: 'hatUzunAdi',
        showClear: true,
      },
    ];
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }
}
