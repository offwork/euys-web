import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtSpDurulama } from '@euys/api-interfaces';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1364Facade } from '../+state/kt-1364.facade';

@Component({
  selector: 'euys-kt1364',
  templateUrl: './kt-1364.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1364Component implements OnInit, OnDestroy {
  isFormVisible$ = new BehaviorSubject<boolean>(false);

  selectedRow!: KtSpDurulama;
  _selectedRow$ = new BehaviorSubject<KtSpDurulama>(null);
  selectedRow$ = this._selectedRow$.asObservable();
  loaded$ = this.facade.loaded$;
  loadedUrunler$ = this.facade.loadedUrunler$;
  loadedCelikler$ = this.facade.loadedCelikler$;
  data$ = this.facade.data$;
  anatabloKomboList$ = this.facade.anatabloKomboList$;
  urunler$ = this.facade.urunler$;
  celikler$ = this.facade.celikler$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtSpDurulama;
  _endSubscription$ = new Subject<boolean>();

  constructor(public facade: Kt1364Facade) {
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
    this.isFormVisible$.next(false);
    this.selectedRow = null;
  }

  onAddClick() {
    this.isFormVisible$.next(true);
    this.selectedRow = null;
  }

  onUpdateClick(row: KtSpDurulama) {
    this._selectedRow$.next(row);
    this.isFormVisible$.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtSpDurulama = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108992',
      islemYapanKisi: '108992',
      olusturanKisi: '108992',
    };

    this.facade.save(spesifikasyon);
  }
  rowSelectHandler(selectedRow: KtSpDurulama) {
    this.selectedRow = selectedRow;
  }

  rowUnselectHandler(selectedRow: KtSpDurulama) {
    this.selectedRow = selectedRow;
  }
}
