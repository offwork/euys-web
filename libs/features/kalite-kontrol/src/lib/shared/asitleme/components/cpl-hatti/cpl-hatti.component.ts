import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AsitlemeProsesModel } from '@euys/api-interfaces';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kk8246Facade } from '../../../../kk-8246/+state/kk-8246.facade';

@Component({
  selector: 'euys-cpl-hatti',
  templateUrl: './cpl-hatti.component.html',
})
export class CplHattiComponent implements OnInit, OnDestroy {
  @Input() cplHattiAsitleme$: Observable<AsitlemeProsesModel[]>;
  @Input() cplHattiAsitlemeLoaded$: Observable<boolean>;
  formConfiguration: DynamicDialogConfig;
  loading$: Observable<boolean>;
  cplHatti$: Observable<AsitlemeProsesModel[]>;
  _endSubscription$ = new Subject<boolean>();

  cplHattiColumnDef = [
    { field: 'tankNo', header: 'ASIT' },
    { field: 'tankMinBanyoSicakligi', header: 'Min' },
    { field: 'tankMaxBanyoSicakligi', header: 'Max' },
    { field: 'banyoSicakligi', header: 'Actual' },
    { field: 'tankMinHclKonsantrasyon', header: 'Min' },
    { field: 'tankMaxHclKonsantrasyon', header: 'Max' },
    { field: 'tankHdfHclKonsantrasyon', header: 'Actual %' },
    { field: 'fe2GrLt', header: 'G/LT', colspan: 3 },
  ];
  cplHattiDurulamaDef = [
    { field: 'tankNo', header: '' },
    { field: 'tankMinBanyoSicakligi', header: 'Min' },
    { field: 'tankMaxBanyoSicakligi', header: 'Max' },
    { field: 'Yakında !!', header: 'Actual' },
    { field: 'tankMaxIletkenlik', header: 'Max' },
    { field: 'iletkenlik', header: 'İletkenlik' },
    { field: 'tanMaxKlorur', header: 'Max' },
    { field: 'iletkenlik', header: 'İletkenlik' },
    { field: 'Yakında !!', header: 'CL I.(MG/LTD)' },
    { field: 'tankMinBanyoSicakligi', header: 'Min' },
    { field: 'Yakında !!', header: 'PH' },
  ];

  constructor(private facade: Kk8246Facade) {
    this.loading$ = this.facade.cplHattiAsitlemeLoaded$.pipe(
      map(loaded => !loaded)
    );
    this.cplHatti$ = this.facade.cplHattiAsitleme$;
  }
  ngOnInit() {
    this.facade.getCplHattiAsitleme('501', 'C2110003010000');
  }
  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }
}
