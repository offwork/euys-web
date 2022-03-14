import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtSpAsitlemeTlv } from '@euys/api-interfaces';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1363Facade } from '../+state/kt-1363.facade';

@Component({
  selector: 'euys-kt1363',
  templateUrl: './kt-1363.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1363Component implements OnInit, OnDestroy {
  isFormVisible$ = new BehaviorSubject<boolean>(false);

  selectedRow!: KtSpAsitlemeTlv;
  _selectedRow$ = new BehaviorSubject<KtSpAsitlemeTlv>(null);
  selectedRow$ = this._selectedRow$.asObservable();
  loaded$ = this.facade.loaded$;
  loadedUrunler$ = this.facade.loadedUrunler$;
  loadedCelikler$ = this.facade.loadedCelikler$;
  data$ = this.facade.data$;
  anatabloKomboList$ = this.facade.anatabloKomboList$;
  urunler$ = this.facade.urunler$;
  celikler$ = this.facade.celikler$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtSpAsitlemeTlv;
  _endSubscription$ = new Subject<boolean>();

  constructor(public facade: Kt1363Facade) {
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

  onUpdateClick(row: KtSpAsitlemeTlv) {
    this._selectedRow$.next(row);
    this.isFormVisible$.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }
  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtSpAsitlemeTlv = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108992',
      islemYapanKisi: '108992',
      olusturanKisi: '108992',
    };

    this.facade.save(spesifikasyon);
  }
  rowSelectHandler(selectedRow: KtSpAsitlemeTlv) {
    this.selectedRow = selectedRow;
  }

  rowUnselectHandler(selectedRow: KtSpAsitlemeTlv) {
    this.selectedRow = selectedRow;
  }
}
