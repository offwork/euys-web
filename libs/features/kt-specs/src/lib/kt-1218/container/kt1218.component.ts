import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { KtCgl12HavaSogutma, IslemTipi } from '@euys/api-interfaces';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1218Facade } from '../+state/kt-1218.facade';

@Component({
  selector: 'euys-kt1218',
  templateUrl: './kt1218.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1218Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtCgl12HavaSogutma;
  _selectedRow = new BehaviorSubject<KtCgl12HavaSogutma>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtCgl12HavaSogutma;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'cgl12HavaSogutmaAjcKodu' },
      { title: 'Sıcaklık (C)', colspan: 3 },
      { title: 'Durum', rowspan: 2 },
      
    ],
    ['Hedef', 'Min.', 'Max.'],
  ];

  cols = [
    new SpecsTableCol('cgl12HavaSogutmaAjcKodu'),
    new SpecsTableCol('hedefSicaklik'),
    new SpecsTableCol('minSicaklik'),
    new SpecsTableCol('maxSicaklik'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    // type: 'number' is optional, if you don't give any type, the number is used by default
    { id: 0, label: 'Hedef Sıcaklığı (C):', controlName: 'hedefSicaklik', required: true },
    { id: 1, label: 'Minimum Sıcaklığı (C):', controlName: 'minSicaklik', required: true },
    { id: 2, label: 'Maksimum Sıcaklığı (C):', controlName: 'maxSicaklik', required: true },
  ];

  constructor(private facade: Kt1218Facade) {
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

  onUpdateClick(row: KtCgl12HavaSogutma) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;


    const spesifikasyon: KtCgl12HavaSogutma = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108806',
      islemYapanKisi: '999999',
      olusturanKisi: '999999',
    };

    this.facade.save(spesifikasyon);
  }
}
