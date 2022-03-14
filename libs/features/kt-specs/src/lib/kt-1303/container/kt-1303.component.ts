import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtSp2SckHadIkmalSicaklik } from '@euys/api-interfaces';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1303Facade } from '../+state/kt-1303.facade';

@Component({
  selector: 'euys-kt1303',
  templateUrl: './kt-1303.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1303Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtSp2SckHadIkmalSicaklik;
  _selectedRow = new BehaviorSubject<KtSp2SckHadIkmalSicaklik>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  loadedUrunler$ = this.facade.loadedUrunler$;
  loadedCelikler$ = this.facade.loadedCelikler$;
  data$ = this.facade.data$;
  anatabloKomboList$ = this.facade.anatabloKomboList$;
  urunler$ = this.facade.urunler$;
  celikler$ = this.facade.celikler$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtSp2SckHadIkmalSicaklik;
  _endSubscription$ = new Subject<boolean>();

  constructor(public facade: Kt1303Facade) {
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

  onUpdateClick(row: KtSp2SckHadIkmalSicaklik) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtSp2SckHadIkmalSicaklik = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108992',
      islemYapanKisi: '108992',
      olusturanKisi: '108992',
    };

    this.facade.save(spesifikasyon);
  }

  rowSelectHandler(selectedRow: KtSp2SckHadIkmalSicaklik) {
    this.selectedRow = selectedRow;
  }

  rowUnselectHandler(selectedRow: KtSp2SckHadIkmalSicaklik) {
    this.selectedRow = selectedRow;
  }
}
