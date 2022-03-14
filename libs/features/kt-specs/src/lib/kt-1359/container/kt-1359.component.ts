import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  KtAnatabloYaglamaDurumu,
  KtOICelikKalitesi,
  KtOIUrun,
  KtStYaglamaYuzeyi,
  UtStHatTanim,
  YaglamaMarkasi,
} from '@euys/api-interfaces';

import { MessageService } from 'primeng/api';

import { BehaviorSubject, Subject } from 'rxjs';
import { FilteringAlgorithmsService } from '@euys/shared/ui';
import { Kt1359Facade } from '../+state/kt-1359.facade';
import { Kt1359Service } from '../services/kt-1359.service';
import { KtSpYaglamaSpec } from '@euys/api-interfaces';
import { clone } from 'lodash';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'euys-kt1359',
  templateUrl: './kt-1359.component.html',
  providers: [MessageService],
})
export class Kt1359Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtSpYaglamaSpec;
  _selectedRow = new BehaviorSubject<KtSpYaglamaSpec>(null);
  selectedRow$ = this._selectedRow.asObservable();
  yaglamaListLoaded$ = this.facade.yaglamaListLoaded$;
  yaglamaList$ = this.facade.yaglamaList$;
  configLoaded$ = this.facade.configLoaded$;
  config$ = this.facade.config$;
  data$ = this.facade.data$;
  kaliteler$ = this.facade.kaliteler$;
  hatlar$ = this.facade.hatlar$;
  defaultRow$ = this.facade.defaultRow$;
  markalar$ = this.facade.markalar$;
  durumlar$ = this.facade.durumlar$;
  yuzeyler$ = this.facade.yuzeyler$;
  spekTablo$ = this.facade.spekTablo$;
  urunler$ = this.facade.urunler$;

  urunler: KtOIUrun[];
  kaliteler: KtOICelikKalitesi[];
  hatlar: UtStHatTanim[];
  markalar: YaglamaMarkasi[];
  durumlar: KtAnatabloYaglamaDurumu[];
  yuzeyler: KtStYaglamaYuzeyi[];
  yaglamalar: KtSpYaglamaSpec[];
  row: KtSpYaglamaSpec;

  defaultRow: KtSpYaglamaSpec;
  _endSubscription = new Subject<boolean>();

  urunKoduFilterArray: KtOIUrun[] = [];
  private urunKoduFilteringReady = new BehaviorSubject<boolean>(false);
  public urunKoduFilteringReady$ = this.urunKoduFilteringReady.asObservable();

  isUpdate = false;

  constructor(
    private filteringAlgorithmsService: FilteringAlgorithmsService,
    public facade: Kt1359Facade,
    private kt1359Service: Kt1359Service,
    private messageService: MessageService
  ) {
    this.defaultRow$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(val => (this.defaultRow = val));
  }

  ngOnInit() {
    this.facade.init();
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

  goBackUpdateSucess(row: KtSpYaglamaSpec) {
    this._selectedRow.next(row);
  }

  onAddClick() {
    this.isFormVisible.next(true);
    this.selectedRow = null;
  }

  onUpdateClick(row: KtSpYaglamaSpec) {
    this.row = clone(row);
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  onSubmit(val: KtSpYaglamaSpec) {
    const row = this.kt1359Service.isUpdate(this.selectedRow)
      ? this.selectedRow
      : this.defaultRow;

    const spesifikasyon: KtSpYaglamaSpec = {
      ...row,
      ...val,
      islemYapanMenu: '108992',
      islemYapanKisi: '108992',
      olusturanKisi: '108992',
    };

    this.facade.save(spesifikasyon);
  }

  selectDistictUrunKoduList() {
    this.urunKoduFilterArray =
      this.filteringAlgorithmsService.getFilteringKTOIUrunArray();
  }

  createFilteringKTOIUrunArray() {
    this.filteringAlgorithmsService.createFilteringKTOIUrunArray(
      this.urunler$,
      this.yaglamaList$
    );
    this.urunKoduFilteringReady.next(true);
  }

  rowSelectHandler(selectedRow: KtSpYaglamaSpec) {
    this.selectedRow = selectedRow;
    this.isUpdate = true;
  }

  rowUnselectHandler(selectedRow: KtSpYaglamaSpec) {
    this.selectedRow = selectedRow;
    this.isUpdate = false;
  }
}
