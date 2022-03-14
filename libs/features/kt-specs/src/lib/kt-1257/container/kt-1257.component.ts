import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtYuzeyDuzgunlugu } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1257Facade } from '../+state/kt-1257.facade';

@Component({
  selector: 'euys-kt1257',
  templateUrl: './kt-1257.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1257Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtYuzeyDuzgunlugu;
  _selectedRow = new BehaviorSubject<KtAtYuzeyDuzgunlugu>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtYuzeyDuzgunlugu;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', sort: 'yuzeyDuzgunluguKodu' },
      { title: 'Max. Sapma (mm)' },
      { title: 'Referans Uzunluk' },
      { title: 'Durum', colspan: 1 },
    ],
  ];

  cols = [
    new SpecsTableCol('yuzeyDuzgunluguKodu'),
    new SpecsTableCol('maxSapmaMm'),
    new SpecsTableCol('referansUzunluk'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Max. Sapma (mm):', controlName: 'maxSapmaMm', required: true },
    { id: 1, label: 'Referans Uzunluk:', controlName: 'referansUzunluk', required: true },
  ];

  constructor(public facade: Kt1257Facade) {
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

  onUpdateClick(row: KtAtYuzeyDuzgunlugu) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtYuzeyDuzgunlugu = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '109171',
      uretimOzellikTipi: '059',
      islemYapanKisi: '109171',
      olusturanKisi: '109171',
    };

    this.facade.save(spesifikasyon);
  }
}
