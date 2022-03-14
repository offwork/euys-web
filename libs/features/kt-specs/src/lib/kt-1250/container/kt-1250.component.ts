import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { IslemTipi, KtAtTemperHaddeYuzdeUzama, ResponseModel } from '@euys/api-interfaces';
import { Kt1250Facade } from '../+state/kt-1250.facade';
import { takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'euys-kt1250',
  templateUrl: './kt-1250.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1250Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtTemperHaddeYuzdeUzama;
  _selectedRow = new BehaviorSubject<KtAtTemperHaddeYuzdeUzama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtTemperHaddeYuzdeUzama;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [{ title: 'Kod', rowspan: 2, sort: 'tempHadTempYuzdeUzamaKodu' }],
    ['Hedef Yüzde Uzama', 'Min Yüzde Uzama', 'Max Yüzde Uzama', 'Min Temper Sertlik', 'Max Temper Sertlik', 'Durum'],
  ];

  cols = [
    new SpecsTableCol('tempHadTempYuzdeUzamaKodu'),
    new SpecsTableCol('hedefYuzdeUzama'),
    new SpecsTableCol('minYuzdeUzama'),
    new SpecsTableCol('maxYuzdeUzama'),
    new SpecsTableCol('minTemperSertlik'),
    new SpecsTableCol('maxTemperSertlik'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, type: 'number', label: 'Hedef Yüzde Uzama (%):', controlName: 'hedefYuzdeUzama', required: true },
    { id: 1, type: 'number', label: 'Min. Yüzde Uzama (%):', controlName: 'minYuzdeUzama', required: true },
    { id: 2, type: 'number', label: 'Max. Yüzde Uzama (%):', controlName: 'maxYuzdeUzama', required: true },
    { id: 3, type: 'number', label: 'Min. Temper Sertlik:', controlName: 'minTemperSertlik' },
    { id: 3, type: 'number', label: 'Max. Temper Sertlik:', controlName: 'maxTemperSertlik' },
  ];

  constructor(public facade: Kt1250Facade) {
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

  onUpdateClick(row: KtAtTemperHaddeYuzdeUzama) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtTemperHaddeYuzdeUzama = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '100396',
      islemYapanKisi: '100396',
      olusturanKisi: '100396',
    };

    this.facade.save(spesifikasyon);
  }
}
