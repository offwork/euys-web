import { Component, OnInit, OnDestroy } from '@angular/core';
import { FmPratigiModel } from '@euys/api-interfaces';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kk8115Facade } from '../../+state/kk-8115.facade';

@Component({
  selector: 'euys-fm-pratigi-dialog',
  templateUrl: './fm-pratigi-dialog.component.html',
})
export class FmPratigiDialogComponent implements OnInit, OnDestroy {
  formConfiguration: DynamicDialogConfig;
  fmPratigiList: FmPratigiModel[];
  loading$: Observable<boolean>;
  fmBilgisi$: Observable<FmPratigiModel[]>;
  _endSubscription$ = new Subject<boolean>();

  fmPratikTableColumnDef = [
    { field: 'prsb1', header: 'PRSB-1' },
    { field: 'prsb2', header: 'PRSB-2' },
    { field: 'f1', header: 'F-1' },
    { field: 'isc2', header: 'ISC-1' },
    { field: 'f2', header: 'F2' },
    { field: 'isc2', header: 'ISC-2' },
    { field: 'f3', header: 'F3' },
    { field: 'f4', header: 'F4' },
    { field: 'f5', header: 'F5' },
    { field: 'f6', header: 'F6' },
    { field: 'f7', header: 'F7' },
  ];

  constructor(
    private facade: Kk8115Facade,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.loading$ = this.facade.fmPratigiBilgileriLoaded$.pipe(
      map(loaded => !loaded)
    );
    this.fmBilgisi$ = this.facade.fmPratigiBilgileri$;
  }
  ngOnInit() {
    this.facade.getFmPratigiBilgileri('332', this.config.data);
  }
  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }
}
