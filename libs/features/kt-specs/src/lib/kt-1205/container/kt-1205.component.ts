import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtAgirlik } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1205Facade } from '../+state/kt-1205.facade';

@Component({
  selector: 'euys-kt1205',
  templateUrl: './kt-1205.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1205Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtAgirlik;
  _selectedRow = new BehaviorSubject<KtAtAgirlik>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtAgirlik;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [{ title: 'Kod', rowspan: 2, sort: 'agirlikKodu' }],
    [
      'Hedef Ağırlık (kg)',
      'Min. Ağırlık (kg)',
      'Max. Ağırlık (kg)',
      'Min. Ağırlık Toleransı (%)',
      'Max. Ağırlık Toleransı (%)',
      'Durum',
    ],
  ];

  cols = [
    new SpecsTableCol('agirlikKodu'),
    new SpecsTableCol('hedefAgirlik'),
    new SpecsTableCol('minAgirlik'),
    new SpecsTableCol('maxAgirlik'),
    new SpecsTableCol('minAgirlikTolerans'),
    new SpecsTableCol('maxAgirlikTolerans'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Hedef Ağırlık (kg):', controlName: 'hedefAgirlik', required: true },
    { id: 1, label: 'Min. Ağırlık (kg):', controlName: 'minAgirlik', required: true },
    { id: 2, label: 'Max. Ağırlık (kg):', controlName: 'maxAgirlik', required: true },
    { id: 3, type: 'string', label: 'Min. Ağırlık Toleransı (%):', controlName: 'minAgirlikTolerans' },
    { id: 4, type: 'string', label: 'Max. Ağırlık Toleransı (%):', controlName: 'maxAgirlikTolerans' },
  ];

  constructor(public facade: Kt1205Facade) {
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

  onUpdateClick(row: KtAtAgirlik) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtAgirlik = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '108885',
      olusturanKisi: '108885',
    };

    this.facade.save(spesifikasyon);
  }
}
