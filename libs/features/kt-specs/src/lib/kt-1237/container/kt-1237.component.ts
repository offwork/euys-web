import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtKenarEgriligi } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1237Facade } from '../+state/kt-1237.facade';

@Component({
  selector: 'euys-kt1237',
  templateUrl: './kt-1237.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1237Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtKenarEgriligi;
  _selectedRow = new BehaviorSubject<KtAtKenarEgriligi>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtKenarEgriligi;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [{ title: 'Kod', rowspan: 2, sort: 'kenarEgriligiKodu' }],
    ['Max. Kenar Eğriliği (mm)', 'Referans Uzunluğu (mm)', { title: 'Durum' }],
  ];
  cols = [
    new SpecsTableCol('kenarEgriligiKodu'),
    new SpecsTableCol('maxKenarEgriligi'),
    new SpecsTableCol('referansUzunlugu'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, type: 'string', label: 'Max. Kenar Eğriliği (mm): ', controlName: 'maxKenarEgriligi', required: true },
    { id: 1, label: 'Referans Uzunluğu (mm): ', controlName: 'referansUzunlugu', required: true },
  ];

  constructor(public facade: Kt1237Facade) {
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

  onUpdateClick(row: KtAtKenarEgriligi) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtKenarEgriligi = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '108885',
      olusturanKisi: '108885',
    };

    this.facade.save(spesifikasyon);
  }
}
