import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtSpYansitmaTesti } from '@euys/api-interfaces';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1360Facade } from '../+state/kt-1360.facade';

@Component({
  selector: 'euys-kt1360',
  templateUrl: './kt-1360.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1360Component implements OnInit, OnDestroy {
  isFormVisible$ = new BehaviorSubject<boolean>(false);

  selectedRow!: KtSpYansitmaTesti;
  _selectedRow$ = new BehaviorSubject<KtSpYansitmaTesti>(null);
  selectedRow$ = this._selectedRow$.asObservable();
  loaded$ = this.facade.loaded$;
  loadedUrunler$ = this.facade.loadedUrunler$;
  loadedCelikler$ = this.facade.loadedCelikler$;
  data$ = this.facade.data$;
  anatabloKomboList$ = this.facade.anatabloKomboList$;
  urunler$ = this.facade.urunler$;
  celikler$ = this.facade.celikler$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtSpYansitmaTesti;
  _endSubscription$ = new Subject<boolean>();

  constructor(public facade: Kt1360Facade) {
    this.defaultRow$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(val => (this.defaultRow = val));
  }

  ngOnInit(): void {
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

  onUpdateClick(row: KtSpYansitmaTesti) {
    this._selectedRow$.next(row);
    this.isFormVisible$.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }
  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtSpYansitmaTesti = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '100396',
      islemYapanKisi: '100396',
      olusturanKisi: '100396',
    };

    this.facade.save(spesifikasyon);
  }
  rowSelectHandler(selectedRow: KtSpYansitmaTesti) {
    this.selectedRow = selectedRow;
  }

  rowUnselectHandler(selectedRow: KtSpYansitmaTesti) {
    this.selectedRow = selectedRow;
  }
}
