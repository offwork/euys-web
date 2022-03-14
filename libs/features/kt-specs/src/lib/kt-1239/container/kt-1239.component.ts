import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtKromKaplamaTfsCro3 } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1239Facade } from '../+state/kt-1239.facade';

@Component({
  selector: 'euys-kt1239',
  templateUrl: './kt-1239.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1239Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtKromKaplamaTfsCro3;
  _selectedRow = new BehaviorSubject<KtAtKromKaplamaTfsCro3>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtKromKaplamaTfsCro3;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'kromKaplamaTfsCro3Kodu' },
      { title: 'I.Kaplama CRO3 Konsantrasyon (g/lt):', colspan: 2 },
      { title: 'II.Kaplama CRO3 Konsantrasyon (g/lt):', colspan: 2 },
      { title: 'Durum', rowspan: 2 },
    ],
    ['Min.', 'Max.', 'Min.', 'Max.'],
  ];

  cols = [
    new SpecsTableCol('kromKaplamaTfsCro3Kodu'),
    new SpecsTableCol('minIKaplamaCro3Konsantrasy'),
    new SpecsTableCol('maxIKaplamaCro3Konsantrasy'),
    new SpecsTableCol('minIiKaplamaCro3Konsantras'),
    new SpecsTableCol('maxIiKaplamaCro3Konsantras'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Min. I.Kaplama CRO3 Konsantrasyon (g/lt):', controlName: 'minIKaplamaCro3Konsantrasy', type: 'string',required: true},
    { id: 1, label: 'Max. I.Kaplama CRO3 Konsantrasyon (g/lt):', controlName: 'maxIKaplamaCro3Konsantrasy', type: 'string',required: true },
    { id: 2, label: 'Min. II.Kaplama CRO3 Konsantrasyon (g/lt):', controlName: 'minIiKaplamaCro3Konsantras', type: 'string',required: true },
    { id: 3, label: 'Max. II.Kaplama CRO3 Konsantrasyon (g/lt):', controlName: 'maxIiKaplamaCro3Konsantras' , type: 'string',required: true},
  ]; 
  constructor(public facade: Kt1239Facade) {
    this.defaultRow$.pipe(takeUntil(this._endSubscription)).subscribe((val) => (this.defaultRow = val));
  }

  ngOnInit(): void {
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

  onUpdateClick(row: KtAtKromKaplamaTfsCro3) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }
  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }
  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;
    const spesifikasyon: KtAtKromKaplamaTfsCro3 = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '108994',
      islemYapanMenu: '994',
      olusturanKisi: '108994',
    };

    this.facade.save(spesifikasyon);
  }
}
