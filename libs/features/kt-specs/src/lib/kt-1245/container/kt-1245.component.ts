import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtNormalize } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1245Facade } from '../+state/kt-1245.facade';

@Component({
  selector: 'euys-kt1245',
  templateUrl: './kt-1245.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1245Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtNormalize;
  _selectedRow = new BehaviorSubject<KtAtNormalize>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtNormalize;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 1, sort: 'normalizeKodu' },
      { title: 'Normalize Zamanı (saat):', colspan: 1 },
      { title: 'Min. Normalize Sıcaklığı (C):', colspan: 1 },
      { title: 'Max. Normalize Sıcaklığı (C):', colspan: 1 },
      { title: 'Durum', rowspan: 1 },
      

    ], 
    
  ];

  cols = [
    new SpecsTableCol('normalizeKodu'),
    new SpecsTableCol('normalizeZamani'),
    new SpecsTableCol('minNormalizeSicakligi'),
    new SpecsTableCol('maxNormalizeSicakligi'),
    new SpecsTableCol('durum'),
    
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Normalize Zamanı (saat):', controlName: 'normalizeZamani', type: 'string',required: true },
    { id: 1, label: 'Min. Normalize Sıcaklığı (C):', controlName: 'minNormalizeSicakligi',required: true },
    { id: 2, label: 'Max. Normalize Sıcaklığı (C):', controlName: 'maxNormalizeSicakligi',required: true },
    
  ];
  constructor(public facade: Kt1245Facade) {
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

  onUpdateClick(row: KtAtNormalize) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }
  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }
  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;
    const spesifikasyon: KtAtNormalize = {
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
