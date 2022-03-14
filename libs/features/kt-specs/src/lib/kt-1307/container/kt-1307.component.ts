import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtSpAmbalajPaket } from '@euys/api-interfaces';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1307Facade } from '../+state/kt-1307.facade';

@Component({
  selector: 'euys-kt1307',
  templateUrl: './kt-1307.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1307Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtSpAmbalajPaket;
  _selectedRow = new BehaviorSubject<KtSpAmbalajPaket>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  anatabloKomboList$ = this.facade.anatabloKomboList$;
  urunAltGrupKomboList$ = this.facade.urunAltGrupKomboList$;
  ambalajPaketKomboList$ = this.facade.ambalajPaketKomboList$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtSpAmbalajPaket;
  _endSubscription$ = new Subject<boolean>();

  constructor(public facade: Kt1307Facade) {
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

  onUpdateClick(row: KtSpAmbalajPaket) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtSpAmbalajPaket = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108992',
      islemYapanKisi: '108992',
      olusturanKisi: '108992',
    };

    this.facade.save(spesifikasyon);
  }

  rowSelectHandler(selectedRow: KtSpAmbalajPaket) {
    this.selectedRow = selectedRow;
  }

  rowUnselectHandler(selectedRow: KtSpAmbalajPaket) {
    this.selectedRow = selectedRow;
  }
}
