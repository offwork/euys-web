import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtAlkaliTemizleme } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1206Facade } from '../+state/kt-1206.facade';

@Component({
  selector: 'euys-kt1206',
  templateUrl: './kt-1206.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1206Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtAlkaliTemizleme;
  _selectedRow = new BehaviorSubject<KtAtAlkaliTemizleme>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtAlkaliTemizleme;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'alkaliTemizlemeKodu' },
      { title: 'Ön Banyo Sıcaklık (C)', colspan: 2 },
      { title: 'Ön Banyo Konsantrasyon (gr/lt)', colspan: 2 },
      { title: 'Ana Banyo Sıcaklık (C)', colspan: 3 },
      { title: 'Ana Banyo Konsantrasyon (gr/lt)', colspan: 3 },
      { title: 'Durum', rowspan: 2 },
    ],
    ['Min.', 'Max.', 'Min.', 'Max.', 'Hedef', 'Min.', 'Max.', 'Hedef', 'Min.', 'Max.'],
  ];

  cols = [
    new SpecsTableCol('alkaliTemizlemeKodu'),
    new SpecsTableCol('minOnBanyoSicaklik'),
    new SpecsTableCol('maxOnBanyoSicaklik'),
    new SpecsTableCol('minOnBanyoKonsantrasyon'),
    new SpecsTableCol('maxOnBanyoKonsantrasyon'),
    new SpecsTableCol('hedefAnaBanyoSicaklik'),
    new SpecsTableCol('minAnaBanyoSicaklik'),
    new SpecsTableCol('maxAnaBanyoSicaklik'),
    new SpecsTableCol('hedefAnaBanyoKonsantrasyon'),
    new SpecsTableCol('minAnaBanyoKonsantrasyon'),
    new SpecsTableCol('maxAnaBanyoKonsantrasyon'),
    new SpecsTableCol('durum'),
  ];
  formControls: Array<DynamicFormControl> = [
    { id: 0, type: 'number', label: 'Min. Ön Banyo Sıcaklık (C) :', controlName: 'minOnBanyoSicaklik', required: true },
    { id: 1, type: 'number', label: 'Max. Ön Banyo Sıcaklık (C) :', controlName: 'maxOnBanyoSicaklik', required: true },
    {
      id: 2,
      type: 'number',
      label: 'Min. Ön Banyo Konsantrasyon (gr/lt) :',
      controlName: 'minOnBanyoKonsantrasyon',
      required: true,
    },
    {
      id: 3,
      type: 'number',
      label: 'Max. Ön Banyo Konsantrasyon (gr/lt) :',
      controlName: 'maxOnBanyoKonsantrasyon',
      required: true,
    },
    {
      id: 4,
      type: 'number',
      label: 'Hedef Ana Banyo Sıcaklık (C) :',
      controlName: 'hedefAnaBanyoSicaklik',
      required: true,
    },
    {
      id: 5,
      type: 'number',
      label: 'Min. Ana Banyo Sıcaklık (C) :',
      controlName: 'minAnaBanyoSicaklik',
      required: true,
    },
    {
      id: 6,
      type: 'number',
      label: 'Max. Ana Banyo Sıcaklık (C) :',
      controlName: 'maxAnaBanyoSicaklik',
      required: true,
    },
    {
      id: 7,
      type: 'number',
      label: 'Hedef Ana Banyo Konsantrasyon (gr/lt) :',
      controlName: 'hedefAnaBanyoKonsantrasyon',
    },
    { id: 8, type: 'number', label: 'Min. Ana Banyo Konsantrasyon (gr/lt) :', controlName: 'minAnaBanyoKonsantrasyon' },
    { id: 9, type: 'number', label: 'Max. Ana Banyo Konsantrasyon (gr/lt) :', controlName: 'maxAnaBanyoKonsantrasyon' },
  ];
  constructor(public facade: Kt1206Facade) {
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

  onUpdateClick(row: KtAtAlkaliTemizleme) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;
    const spesifikasyon: KtAtAlkaliTemizleme = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '108885',
      olusturanKisi: '108885',
    };

    this.facade.save(spesifikasyon);
  }
}
