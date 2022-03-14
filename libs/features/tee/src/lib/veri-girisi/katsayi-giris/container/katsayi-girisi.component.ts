import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormFieldSchema } from '@euys/shared/ui';
import { translationScopeLoader } from '@euys/shared/utility';
import { FormControl } from '@ngneat/reactive-forms';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import * as _ from 'lodash';
import { combineLatest, Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { KatsayiGirisFacade } from '../+state/katsayi-giris.facade';
import { Katsayi, KatsayiModel } from '../+state/katsayi-giris.models';
import {
  ColumnData,
  GridInputChangeModel,
} from '../../models/data-grid-input.model';

@Component({
  selector: 'euys-katsayi-girisi',
  templateUrl: './katsayi-girisi.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'page-container' },
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'Katsayi',
        alias: 'DUSK',
        loader: translationScopeLoader(
          (lang: string, root: string) => import(`../${root}/${lang}.json`)
        ),
      },
    },
  ],
})
export class KatsayiGirisiComponent implements OnDestroy, OnInit {
  columnsDef = [
    'Erdemir Geneli (%)',
    'Direktörlük (%)',
    'Başmühendislik (%)',
    'Hat (%)',
  ];
  selectedYear: number;
  previousYaer: boolean;
  loaded$: Observable<boolean>;
  leftTitleList$: Observable<string[]>;
  coefficients$: Observable<KatsayiModel[]>;
  gridDataSource$: Observable<Katsayi<ColumnData>>;
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
  // TODO: For test...
  textIndent = new Array<{ indentSize: number }>();
  saveDisable$: Observable<boolean>;
  _endSubscription$ = new Subject<boolean>();

  constructor(private facade: KatsayiGirisFacade) {
    this.leftTitleList$ = this.facade.leftTitleList$;
    this.gridDataSource$ = this.facade.getDataGrid$;
    this.saveDisable$ = this.facade.invalidGrid$;
    this.coefficients$ = this.facade.coefficients$;
    this.loaded$ = this.facade.loaded$;
  }

  calculatePercentage(event: GridInputChangeModel) {
    this.facade.updateGrid(event);
    this.facade.verifyInput(event.column);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickOnContinue(event: any) {
    this.selectedYear = event.year;
    this.previousYaer = event.previousYear;
    this.facade.load(event.year, event.previousYear);
  }

  clickOnSave() {
    combineLatest([this.gridDataSource$, this.coefficients$])
      .pipe(take(1), takeUntil(this._endSubscription$))
      .subscribe(([dataGrid, coefficients]) => {
        const katsayiGiris = _.cloneDeep(coefficients);
        Object.keys(dataGrid).forEach(key => {
          dataGrid[key].forEach((value, index) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            katsayiGiris[index][`${key}Yuzdesi`] = value.percent;
          });
        });

        this.facade.saveDataGrid(
          katsayiGiris,
          this.selectedYear,
          this.previousYaer
        );
      });
  }

  ngOnInit() {
    this.facade.init();
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }
}
