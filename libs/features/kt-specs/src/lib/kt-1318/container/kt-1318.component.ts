import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtSpCgl12HavaSogutmaAjc } from '@euys/api-interfaces';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1318Facade } from '../+state/kt-1318.facade';

@Component({
  selector: 'euys-kt1318',
  templateUrl: './kt-1318.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1318Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtSpCgl12HavaSogutmaAjc;
  _selectedRow = new BehaviorSubject<KtSpCgl12HavaSogutmaAjc>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  loadedUrunler$ = this.facade.loadedUrunler$;
  loadedCelikler$ = this.facade.loadedCelikler$;
  data$ = this.facade.data$;
  anatabloKomboList$ = this.facade.anatabloKomboList$;
  urunler$ = this.facade.urunler$;
  celikler$ = this.facade.celikler$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtSpCgl12HavaSogutmaAjc;
  _endSubscription$ = new Subject<boolean>();

  constructor(public facade: Kt1318Facade) {
    this.defaultRow$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(val => (this.defaultRow = val));
  }

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

  onUpdateClick(row: KtSpCgl12HavaSogutmaAjc) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtSpCgl12HavaSogutmaAjc = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108992',
      islemYapanKisi: '108992',
      olusturanKisi: '108992',
    };

    this.facade.save(spesifikasyon);
  }

  rowSelectHandler(selectedRow: KtSpCgl12HavaSogutmaAjc) {
    this.selectedRow = selectedRow;
  }

  rowUnselectHandler(selectedRow: KtSpCgl12HavaSogutmaAjc) {
    this.selectedRow = selectedRow;
  }
}
