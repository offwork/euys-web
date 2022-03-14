import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtKoseDikligi } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1238Facade } from '../+state/kt-1238.facade';

@Component({
  selector: 'euys-kt1238',
  templateUrl: './kt-1238.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1238Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtKoseDikligi;
  _selectedRow = new BehaviorSubject<KtAtKoseDikligi>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtKoseDikligi;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 1, sort: 'koseDikligiKodu' },
      { title: 'Max. Köşe Dikliği', colspan: 1 },
      { title: 'Durum', colspan: 1 },
    ],
  ];

  cols = [new SpecsTableCol('koseDikligiKodu'), new SpecsTableCol('maxKoseDikligi'), new SpecsTableCol('durum')];

  formControls: Array<DynamicFormControl> = [
    { id: 0, type: 'string', label: 'Max. Köşe Dikliği:', controlName: 'maxKoseDikligi', required: true },
  ];

  constructor(public facade: Kt1238Facade) {
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

  onUpdateClick(row: KtAtKoseDikligi) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtKoseDikligi = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '109171',
      uretimOzellikTipi: '036',
      islemYapanKisi: '109171',
      olusturanKisi: '109171',
    };

    this.facade.save(spesifikasyon);
  }
}
