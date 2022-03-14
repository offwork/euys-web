import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtKalinlikSapmaAraligi } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1236Facade } from '../+state/kt-1236.facade';

@Component({
  selector: 'euys-kt1236',
  templateUrl: './kt-1236.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1236Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtKalinlikSapmaAraligi;
  _selectedRow = new BehaviorSubject<KtAtKalinlikSapmaAraligi>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtKalinlikSapmaAraligi;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 1, sort: 'kalinlikSapmaAraligiKodu' },
      '5 Band kalınlık Sapma Kodu',
      'Toplam Sapma Değeri (mm)',
      'Min Sapma Değeri (mm)',
      'Max. Sapma Değeri (mm)',
      { title: 'Durum', rowspan: 1 },
    ],
  ];

  cols = [
    new SpecsTableCol('kalinlikSapmaAraligiKodu'),
    new SpecsTableCol('kalinlikSapmaKodu5Band'),
    new SpecsTableCol('toplamSapmaDegeri'),
    new SpecsTableCol('minSapmaDegeri'),
    new SpecsTableCol('maxSapmaDegeri'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: '5 Band kalınlık Sapma Kodu :', controlName: 'kalinlikSapmaKodu5Band', required: true },
    { id: 1, label: 'Toplam Sapma Değeri (mm) :', controlName: 'toplamSapmaDegeri', type: 'string', required: true },
    { id: 2, label: 'Min Sapma Değeri (mm) :', controlName: 'minSapmaDegeri', type: 'string', required: true },
    { id: 3, label: 'Max. Sapma Değeri (mm) :', controlName: 'maxSapmaDegeri', type: 'string', required: true },
  ];

  constructor(public facade: Kt1236Facade) {
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

  onUpdateClick(row: KtAtKalinlikSapmaAraligi) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtKalinlikSapmaAraligi = {
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
