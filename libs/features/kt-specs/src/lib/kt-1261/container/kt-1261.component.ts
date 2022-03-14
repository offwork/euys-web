import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtYuzeyDuzgunluguIUnit } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1261Facade } from '../+state/kt-1261.facade';

@Component({
  selector: 'euys-kt1261',
  templateUrl: './kt-1261.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1261Component implements OnInit, OnDestroy {
  isFormVisible$ = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtYuzeyDuzgunluguIUnit;
  _selectedRow = new BehaviorSubject<KtAtYuzeyDuzgunluguIUnit>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtYuzeyDuzgunluguIUnit;
  _endSubscription$ = new Subject<boolean>();
  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', sort: 'yuzeyDuzgunluguIUnitKodu' },
      { title: 'Hedef Yüzey Düzgünlüğü' },
      { title: 'Pozitif Tolerans' },
      { title: 'Negatif Tolerans' },
      { title: 'Durum', colspan: 1 },
    ],
  ];

  cols = [
    new SpecsTableCol('yuzeyDuzgunluguIUnitKodu'),
    new SpecsTableCol('hedefYuzeyDuzgunlugu'),
    new SpecsTableCol('pozitifTolerans'),
    new SpecsTableCol('negatifTolerans'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Hedef Yüzey Düzgünlüğü:',
      controlName: 'hedefYuzeyDuzgunlugu',
      required: true,
    },
    {
      id: 1,
      label: 'Pozitif Tolerans:',
      controlName: 'pozitifTolerans',
      required: true,
    },
    {
      id: 1,
      label: 'Negatif Tolerans:',
      controlName: 'negatifTolerans',
      required: true,
    },
  ];
  constructor(public facade: Kt1261Facade) {
    this.defaultRow$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(val => (this.defaultRow = val));
  }

  ngOnInit(): void {
    this.facade.init();
    this.data$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(() => this.goBack());
  }
  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }
  reload() {
    this.facade.init();
  }

  goBack() {
    this.isFormVisible$.next(false);
    this.selectedRow = null;
  }
  onAddClick() {
    this.isFormVisible$.next(true);
    this.selectedRow = null;
  }
  onUpdateClick(row: KtAtYuzeyDuzgunluguIUnit) {
    this._selectedRow.next(row);
    this.isFormVisible$.next(true);
  }
  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtYuzeyDuzgunluguIUnit = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '100396',
      uretimOzellikTipi: '063',
      islemYapanKisi: '100396',
      olusturanKisi: '100396',
    };
    this.facade.save(spesifikasyon);
  }
}
