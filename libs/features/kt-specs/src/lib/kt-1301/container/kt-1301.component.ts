import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtSp1SckHadIkmalSicaklik } from '@euys/api-interfaces';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1301Facade } from '../+state/kt-1301.facade';

@Component({
  selector: 'euys-kt1301',
  templateUrl: './kt-1301.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1301Component implements OnInit, OnDestroy {
  isFormVisible$ = new BehaviorSubject<boolean>(false);
  selectedRow!: KtSp1SckHadIkmalSicaklik;
  _selectedRow = new BehaviorSubject<KtSp1SckHadIkmalSicaklik>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  loadedUrunler$ = this.facade.loadedUrunler$;
  loadedCelikler$ = this.facade.loadedCelikler$;
  data$ = this.facade.data$;
  anatabloKomboList$ = this.facade.anatabloKomboList$;
  urunler$ = this.facade.urunler$;
  celikler$ = this.facade.celikler$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtSp1SckHadIkmalSicaklik;
  _endSubscription$ = new Subject<boolean>();

  constructor(public facade: Kt1301Facade) {
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

  onUpdateClick(row: KtSp1SckHadIkmalSicaklik) {
    this._selectedRow.next(row);
    this.isFormVisible$.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtSp1SckHadIkmalSicaklik = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '100396',
      islemYapanKisi: '100396',
      olusturanKisi: '100396',
    };

    this.facade.save(spesifikasyon);
  }
  rowSelectHandler(selectedRow: KtSp1SckHadIkmalSicaklik) {
    this.selectedRow = selectedRow;
  }

  rowUnselectHandler(selectedRow: KtSp1SckHadIkmalSicaklik) {
    this.selectedRow = selectedRow;
  }
}
