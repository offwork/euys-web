import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { Kk8139Facade } from '../../../../+state/kk-8139.facade';
import { isDispozeBobin } from '../../../../utils/rules';
import { CmPratigiDialogComponent } from '../../../shared/cm-pratigi-dialog/cm-pratigi-dialog.component';
import { MfsDialogComponent } from '../../../shared/mfs-dialog/mfs-dialog.component';
import { SmPratigiDialogComponent } from '../../../shared/sm-pratigi-dialog/sm-pratigi-dialog.component';

@Component({
  selector: 'euys-qc-kayit-onay-fifth',
  templateUrl: './qc-kayit-onay-fifth.component.html',
  styleUrls: ['./qc-kayit-onay-fifth.component.scss'],
})
export class QcKayitOnayFifthComponent implements OnDestroy {
  @Output() goToPage: EventEmitter<number> = new EventEmitter<number>();

  cmDialogRef: DynamicDialogRef;
  smDialogRef: DynamicDialogRef;

  _endSubscription = new Subject<boolean>();

  qcKayitBilgileri$ = this.facade.qcKayitBilgileri$;
  qcKayitBilgileriLoaded$ = this.facade.qcKayitBilgileriLoaded$;
  tcrBilgileriList$ = this.facade.tcrBilgileriList$;
  oncekiHatKusurList$ = this.facade.oncekiHatKusurList$;

  dispozeBobin$ = this.facade.qcKayitBilgileri$.pipe(
    map(qcKayitBilgileri => isDispozeBobin(qcKayitBilgileri?.dispozeKodu))
  );

  constructor(
    public config: DynamicDialogConfig,
    private dialogService: DialogService,
    private facade: Kk8139Facade
  ) {}

  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }

  goToFourthStep() {
    this.goToPage.emit(3);
  }

  confirmHandler() {
    console.log('hsm1 qc onay confirm handler');
  }

  openCmDialog() {
    this.cmDialogRef = this.dialogService.open(CmPratigiDialogComponent, {
      baseZIndex: 10000,
      contentStyle: { height: '80vh', overflow: 'auto' },
      data: null,
      dismissableMask: true,
      header: 'CM 1 PRATİĞİ',
      modal: true,
      width: '70%',
    });
    this.cmDialogRef.onClose
      .pipe(takeUntil(this._endSubscription))
      .subscribe(() => {
        this.facade.resetCmPratigiList();
      });
  }

  openSmDialog() {
    this.smDialogRef = this.dialogService.open(SmPratigiDialogComponent, {
      baseZIndex: 10000,
      contentStyle: { height: '80vh', overflow: 'auto' },
      data: null,
      dismissableMask: true,
      header: 'SM 1 PRATİĞİ',
      modal: true,
      width: '70%',
    });
    this.smDialogRef.onClose
      .pipe(takeUntil(this._endSubscription))
      .subscribe(() => {
        this.facade.resetSmPratigiList();
      });
  }

  mfsDialog(bobinNo: string = '41030054000'): void {
    const dialogRef = this.dialogService.open(MfsDialogComponent, {
      header: 'MFS ve Grafikleri',
      width: '50vw',
      modal: true,
      data: bobinNo,
    });

    dialogRef.onClose.pipe(takeUntil(this._endSubscription)).subscribe(() => {
      //
    });
  }
}
