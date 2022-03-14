import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtKromKaplamaTfsFlor } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1241Facade } from '../+state/kt-1241.facade';

@Component({
  selector: 'euys-kt1241',
  templateUrl: './kt-1241.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1241Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtKromKaplamaTfsFlor;
  _selectedRow = new BehaviorSubject<KtAtKromKaplamaTfsFlor>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtKromKaplamaTfsFlor;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'kromKaplamaTfsFlorKodu' },
      { title: 'I.Kaplama FLOR Konsantrasyon (g/lt)', colspan: 2 },
      { title: 'II.Kaplama FLOR Konsantrasyon (g/lt)', colspan: 2 },
      { title: 'Durum', rowspan: 2 },
    ],
    ['Min.', 'Max.', 'Min.', 'Max.'],
  ];

  cols = [
    new SpecsTableCol('kromKaplamaTfsFlorKodu'),
    new SpecsTableCol('minIKaplamaFlorKonsantrasy'),
    new SpecsTableCol('maxIKaplamaFlorKonsantrasy'),
    new SpecsTableCol('minIiKaplamaFlorKonsantras'),
    new SpecsTableCol('maxIiKaplamaFlorKonsantras'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Min. I.Kaplama FLOR Konsantrasyon (g/lt):', controlName: 'minIKaplamaFlorKonsantrasy', type: 'string', required: true },
    { id: 1, label: 'Max. I.Kaplama FLOR Konsantrasyon (g/lt):', controlName: 'maxIKaplamaFlorKonsantrasy', type: 'string', required: true },
    { id: 2, label: 'Min. II.Kaplama FLOR Konsantrasyon (g/lt):', controlName: 'minIiKaplamaFlorKonsantras', type: 'string', required: true },
    { id: 3, label: 'Max. II.Kaplama FLOR Konsantrasyon (g/lt):', controlName: 'maxIiKaplamaFlorKonsantras', type: 'string', required: true },
  ];

  constructor(public facade: Kt1241Facade) {
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

  onUpdateClick(row: KtAtKromKaplamaTfsFlor) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtKromKaplamaTfsFlor = {
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
