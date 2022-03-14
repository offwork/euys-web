import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtDurulama } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1210Facade } from '../+state/kt-1210.facade';

@Component({
  selector: 'euys-kt1210',
  templateUrl: './kt-1210.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1210Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtDurulama;
  _selectedRow = new BehaviorSubject<KtAtDurulama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtDurulama;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'durulamaKodu' },
      { title: 'PH', colspan: 2 },
      { title: 'İletkenlik', colspan: 2 },
      { title: 'Klorür(mg/l)', colspan: 2 },
      { title: '1. Tank Banyo Sıcaklığı(C)', colspan: 2 },
      { title: '5. Tank Banyo Sıcaklığı(C)', colspan: 2 },
      { title: 'Durum', rowspan: 2 },
    ],
    [
      '1. Tank Max.',
      '5. Tank Max.',
      '1. Tank Max.',
      '5. Tank Max.',
      '1. Tank Max.',
      '5. Tank Max.',
      'Min.',
      'Max.',
      'Min.',
      'Max.',
    ],
  ];

  cols = [
    new SpecsTableCol('durulamaKodu'),
    new SpecsTableCol('tank1MaxPh'),
    new SpecsTableCol('tank5MaxPh'),
    new SpecsTableCol('tank1MaxIletkenlik'),
    new SpecsTableCol('tank5MaxIletkenlik'),
    new SpecsTableCol('tank1MaxKlorur'),
    new SpecsTableCol('tank5MaxKlorur'),
    new SpecsTableCol('tank1MinBanyoSicakligi'),
    new SpecsTableCol('tank1MaxBanyoSicakligi'),
    new SpecsTableCol('tank5MinBanyoSicakligi'),
    new SpecsTableCol('tank5MaxBanyoSicakligi'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: '1. Tank Max. PH:', controlName: 'tank1MaxPh', type: 'string', required: true },
    { id: 1, label: '5. Tank Max. PH:', controlName: 'tank5MaxPh', type: 'string', required: true },
    { id: 2, label: '1. Tank Max. İletkenlik:', controlName: 'tank1MaxIletkenlik', required: true },
    { id: 3, label: '5. Tank Max. İletkenlik:', controlName: 'tank5MaxIletkenlik', required: true },
    { id: 4, label: '1. Tank Max. Klorür(mg/l):', controlName: 'tank1MaxKlorur', required: true },
    { id: 5, label: '5. Tank Max. Klorür(mg/l):', controlName: 'tank5MaxKlorur', required: true },
    { id: 6, label: '1. Tank Min. Banyo Sıcaklığı(C):', controlName: 'tank1MinBanyoSicakligi', required: true },
    { id: 7, label: '1. Tank Max. Banyo Sıcaklığı(C):', controlName: 'tank1MaxBanyoSicakligi', required: true },
    { id: 8, label: '5. Tank Min. Banyo Sıcaklığı(C):', controlName: 'tank5MinBanyoSicakligi', required: true },
    { id: 9, label: '5. Tank Max. Banyo Sıcaklığı(C):', controlName: 'tank5MaxBanyoSicakligi', required: true },
  ];

  constructor(public facade: Kt1210Facade) {
    this.defaultRow$.pipe(takeUntil(this._endSubscription)).subscribe((val) => (this.defaultRow = val));
  }

  ngOnInit() {
    this.facade.init();
    this.data$.pipe(takeUntil(this._endSubscription)).subscribe(() => this.goBack());
  }

  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }

  reload() {
    this.facade.init();
  }

  goBack() {
    this.isFormVisible.next(false);
    this.selectedRow = null;
  }

  onAddClick() {
    this.isFormVisible.next(true);
    this.selectedRow = null;
  }

  onUpdateClick(row: KtAtDurulama) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtDurulama = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108992',
      islemYapanKisi: '108992',
      olusturanKisi: '108992',
    };

    this.facade.save(spesifikasyon);
  }
}
