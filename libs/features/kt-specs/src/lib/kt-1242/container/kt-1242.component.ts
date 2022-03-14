import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtKromKaplamaTfsSo4 } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1242Facade } from '../+state/kt-1242.facade';

@Component({
  selector: 'euys-kt1242',
  templateUrl: './kt-1242.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1242Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtKromKaplamaTfsSo4;
  _selectedRow = new BehaviorSubject<KtAtKromKaplamaTfsSo4>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtKromKaplamaTfsSo4;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'kromKaplamaTfsSo4Kodu' },
      { title: ' I.Kaplama SO4 Konsantrasyon (g/lt):', colspan: 2 },
      { title: 'Durum', rowspan: 2 },
    ],
    ['Min.', 'Max.'],
  ];

  cols = [
    new SpecsTableCol('kromKaplamaTfsSo4Kodu'),
    new SpecsTableCol('minIKaplamaSo4Konsantrasyn'),
    new SpecsTableCol('maxIKaplamaSo4Konsantrasyn'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Min. I.Kaplama SO4 Konsantrasyon (g/lt):', controlName: 'minIKaplamaSo4Konsantrasyn', type: 'string',required: true },
    { id: 1, label: 'Max. I.Kaplama SO4 Konsantrasyon (g/lt):', controlName: 'maxIKaplamaSo4Konsantrasyn' , type: 'string',required: true},
  ];

  constructor(public facade: Kt1242Facade) {
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

  onUpdateClick(row: KtAtKromKaplamaTfsSo4) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }
  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;
    const spesifikasyon: KtAtKromKaplamaTfsSo4 = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '994',
      islemYapanKisi: '108994',
      olusturanKisi: '108994',
    };
    this.facade.save(spesifikasyon);
  }
}
