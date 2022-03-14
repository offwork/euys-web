import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Hat,
  IslemTipi,
  KtSpMarkalama,
  KtSpMarkalamaViewModel,
  ResponseModel,
} from '@euys/api-interfaces';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1344Facade } from '../+state/kt-1344.facade';

@Component({
  selector: 'euys-kt1344',
  templateUrl: './kt-1344.component.html',
})
export class Kt1344Component implements OnInit, OnDestroy {
  data: Observable<ResponseModel<KtSpMarkalamaViewModel>>;
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtSpMarkalama;
  _selectedRow = new BehaviorSubject<KtSpMarkalama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  anatabloKomboList$ = this.facade.anatabloKomboList$;
  oiAnatabloKomboList$ = this.facade.oiAnatabloKomboList$;
  hatKomboList$ = this.facade.hatKomboList$;

  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtSpMarkalama;
  _endSubscription$ = new Subject<boolean>();
  hatlar: Observable<Hat[]>;

  constructor(public facade: Kt1344Facade) {}

  ngOnInit() {
    this.facade.init();
    this.data$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(() => this.goBack());
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
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

  onUpdateClick(row: KtSpMarkalama) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }
  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtSpMarkalama = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '100396',
      islemYapanKisi: '100396',
      olusturanKisi: '100396',
    };

    this.facade.save(spesifikasyon);
  }
  rowSelectHandler(selectedRow: KtSpMarkalama) {
    this.selectedRow = selectedRow;
  }

  rowUnselectHandler(selectedRow: KtSpMarkalama) {
    this.selectedRow = selectedRow;
  }
}
