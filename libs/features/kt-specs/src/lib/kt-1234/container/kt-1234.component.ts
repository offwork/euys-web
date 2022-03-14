import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtIiTenekeTemizleme } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1234Facade } from '../+state/kt-1234.facade';

@Component({
  selector: 'euys-kt1234',
  templateUrl: './kt-1234.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1234Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtIiTenekeTemizleme;
  _selectedRow = new BehaviorSubject<KtAtIiTenekeTemizleme>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtIiTenekeTemizleme;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'iiTenekeTemizlemeKodu' },
      { title: 'Ön Temizleme', colspan: 4 },
      { title: 'Temizleme', colspan: 4 },
      { title: 'Durum', rowspan: 2 },
    ],
    [
      'Min. Sıcaklık(C)',
      'Max. Sıcaklık(C)',
      'Min. Alkali Konsantrasyon',
      'Max. Alkali Konsantrasyon',
      'Min. Sıcaklık(C)',
      'Max. Sıcaklık(C)',
      'Min. Alkali Konsantrasyon',
      'Max. Alkali Konsantrasyon',
    ],
  ];

  cols = [
    new SpecsTableCol('iiTenekeTemizlemeKodu'),
    new SpecsTableCol('minOnTemizlemeSicaklik'),
    new SpecsTableCol('maxOnTemizlemeSicaklik'),
    new SpecsTableCol('minOnTemizlemeAlkaliKonsan'),
    new SpecsTableCol('maxOnTemizlemeAlkaliKonsan'),
    new SpecsTableCol('minTemizlemeSicaklik'),
    new SpecsTableCol('maxTemizlemeSicaklik'),
    new SpecsTableCol('minTemizlemeAlkaliKonsantra'),
    new SpecsTableCol('maxTemizlemeAlkaliKonsantra'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Min. Ön Temizleme Sıcaklık(C) :', controlName: 'minOnTemizlemeSicaklik', required: true },
    { id: 1, label: 'Max. Ön Temizleme Sıcaklık(C) :', controlName: 'maxOnTemizlemeSicaklik', required: true },
    {
      id: 2,
      label: 'Min. Ön Temizleme Alkali Konsantrasyon (g/lt) :',
      controlName: 'minOnTemizlemeAlkaliKonsan',
      type: 'string',
      required: true,
    },
    {
      id: 3,
      label: 'Max. Ön Temizleme Alkali Konsantrasyon (g/lt) :',
      controlName: 'maxOnTemizlemeAlkaliKonsan',
      type: 'string',
      required: true,
    },
    { id: 4, label: 'Min. Temizleme Sıcaklık(C) :', controlName: 'minTemizlemeSicaklik', required: true },
    { id: 5, label: 'Max. Temizleme Sıcaklık(C) :', controlName: 'maxTemizlemeSicaklik', required: true },
    {
      id: 6,
      label: 'Min. Temizleme Alkali Konsantrasyon (g/lt) :',
      controlName: 'minTemizlemeAlkaliKonsantra',
      type: 'string',
      required: true,
    },
    {
      id: 7,
      label: 'Max. Temizleme Alkali Konsantrasyon (g/lt) :',
      controlName: 'maxTemizlemeAlkaliKonsantra',
      type: 'string',
      required: true,
    },
  ];

  constructor(public facade: Kt1234Facade) {
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

  onUpdateClick(row: KtAtIiTenekeTemizleme) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }
  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtIiTenekeTemizleme = {
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
