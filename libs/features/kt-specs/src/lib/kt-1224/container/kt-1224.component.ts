import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { KtAtDokumCelikKalitesi, IslemTipi } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1224Facade } from '../+state/kt-1224.facade';

@Component({
  selector: 'euys-kt1224',
  templateUrl: './kt-1224.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1224Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtDokumCelikKalitesi;
  _selectedRow = new BehaviorSubject<KtAtDokumCelikKalitesi>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtDokumCelikKalitesi;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [{ title: 'Kod', sort: 'dokumCelikKalitesiKodu' }, { title: 'Döküm Çelik Kalitesi' }, { title: 'Durum', rowspan: 1 }],
  ];

  cols = [new SpecsTableCol('dokumCelikKalitesiKodu'), new SpecsTableCol('dokumCelikKalitesi'), new SpecsTableCol('durum'),];
  formControls: Array<DynamicFormControl> = [
    { id: 0, type: 'string', label: 'Döküm Çelik Kalitesi :', controlName: 'dokumCelikKalitesi' , required: true },
  ];

  constructor(public facade: Kt1224Facade) {
    this.defaultRow$.pipe(takeUntil(this._endSubscription)).subscribe((val) => (this.defaultRow = val));
  }
  ngOnInit() {
    this.facade.init();
    this.data$.pipe(takeUntil(this._endSubscription))
      .subscribe(() => this.goBack());
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

  onUpdateClick(row: KtAtDokumCelikKalitesi) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }
  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtDokumCelikKalitesi = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '999999',
      olusturanKisi: '999999',
    };

    this.facade.save(spesifikasyon);
  }
}
