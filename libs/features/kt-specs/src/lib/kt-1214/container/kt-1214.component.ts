import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtBobinDilUcu } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilKeyChanged, takeUntil } from 'rxjs/operators';
import { Kt1214Facade } from '../+state/kt-1214.facade';

@Component({
  selector: 'euys-kt1214',
  templateUrl: './kt-1214.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1214Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtBobinDilUcu;
  _selectedRow = new BehaviorSubject<KtAtBobinDilUcu>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtBobinDilUcu;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 1, sort: 'bobinDilUcuKodu' },
      { title: 'Bobin Dil Ucu Açıklama', colspan: 1 },
      { title: 'Durum' },
    ],
  ];

  cols = [new SpecsTableCol('bobinDilUcuKodu'), new SpecsTableCol('bobinDilUcuAciklama'), new SpecsTableCol('durum')];

  formControls: Array<DynamicFormControl> = [
    { id: 0, type: 'string', label: 'Bobin Dil Ucu Açıklama:', controlName: 'bobinDilUcuAciklama', required: true },
  ];

  constructor(public facade: Kt1214Facade) {
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

  onUpdateClick(row: KtAtBobinDilUcu) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtBobinDilUcu = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '108885',
      olusturanKisi: '108885',
    };

    this.facade.save(spesifikasyon);
  }
}
