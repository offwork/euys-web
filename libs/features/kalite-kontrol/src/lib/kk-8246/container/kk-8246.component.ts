import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AsitlemeBobinModel,
  BagimsizNumuneGoruntulemeModel,
} from '@euys/api-interfaces';
import { Kk8246Facade } from '../+state/kk-8246.facade';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BagimsizNumuneGoruntulemeComponent } from '../components/bagimsiz-numune-goruntuleme.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CplHattiComponent } from '../../shared/asitleme/components/cpl-hatti/cpl-hatti.component';
@Component({
  selector: 'euys-kk8246',
  templateUrl: './kk-8246.component.html',
  styles: [],
})
export class Kk8246Component implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  asitlemeHatlari: string[] = ['PPL', 'CPL'];
  selectedHat: string;
  asitlemeBobinList$ = this.facade.asitlemeBobinList$;
  asitlemeBobinListLoaded$ = this.facade.asitlemeBobinListLoaded$;
  selectedBobin?: AsitlemeBobinModel;
  bagimsizNumuneGoruntuleme$ = this.facade.bagimsizNumuneGoruntuleme$;
  bagimsizNumuneGoruntulemeLoaded$ =
    this.facade.bagimsizNumuneGoruntulemeLoaded$;
  bagimsizNumuneGotuntulemeRef: DynamicDialogRef;
  _endSubscription$ = new Subject<boolean>();

  constructor(
    public facade: Kk8246Facade,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.facade.init();
  }
  bagimsizNumuneGoruntuleme(bobinNo: string = 'C2110000010000'): void {
    const dialogRef = this.dialogService.open(
      BagimsizNumuneGoruntulemeComponent,
      {
        header: 'Fm Pratigi',
        width: '50vw',
        modal: true,
        data: bobinNo,
      }
    );

    dialogRef.onClose.subscribe(() => {
      this.facade.resetBagimsizNumuneGoruntuleme();
    });
  }
  CplHattiAsitleme(hatNo: string = '501', bobinNo: string = 'C2110002010000') {
    this.facade.getCplHattiAsitleme(hatNo, bobinNo);
    const dialogRef = this.dialogService.open(CplHattiComponent, {
      header: 'Cpl Hattı Asitleme',
      width: '50vw',
      modal: true,
      data: {
        cplHattiAsitleme$: this.facade.cplHattiAsitleme$,
        cplHattiAsitlemeLoaded$: this.facade.cplHattiAsitlemeLoaded$,
      },
    });

    dialogRef.onClose.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.facade.resetCplHattiAsitleme();
    });
  }
  CplHattiDurulama(hatNo: string = '501', bobinNo: string = 'C2110002010000') {
    this.facade.getCplHattiDurulama(hatNo, bobinNo);
    const dialogRef = this.dialogService.open(CplHattiComponent, {
      header: 'Cpl Hattı Durulama ',
      width: '50vw',
      modal: true,
      data: {
        cplHattiDurulama$: this.facade.cplHattiDurulama$,
        cplHattiDurulamaLoaded$: this.facade.cplHattiDurulamaLoaded$,
      },
    });

    dialogRef.onClose.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.facade.resetCplHattiAsitleme();
    });
  }

  bobinListesiGetir(event: { value: string }): void {
    if (event.value === 'PPL') {
      this.facade.getAsitlemeBobinList('501');
      this.selectedBobin = null;
    } else if (event.value === 'CPL') {
      this.facade.getAsitlemeBobinList('502');
      this.selectedBobin = null;
    } else if (!event.value) {
      return;
    }
  }

  bagimsizNumune(bobin: AsitlemeBobinModel) {
    console.log(this.selectedHat, bobin); //TODO This Line işleve göre değiştirilecek
  }
  bagimsizMesaj(bobin: AsitlemeBobinModel) {
    console.log(this.selectedHat, bobin); //TODO This Line işleve göre değiştirilecek
  }
  devam() {
    if (this.selectedBobin) {
      console.log(this.selectedBobin, this.selectedHat); //TODO This Line işleve göre değiştirilecek
    }
  }
  bagimsizNumuneGoruntulemeNext(
    list: Partial<BagimsizNumuneGoruntulemeModel>[]
  ) {
    console.log(list);
  }
  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }
}
