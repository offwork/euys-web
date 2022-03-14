import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import {
  HSM1UretimDegerleri,
  OncekiHatKusur,
  QCKayitBilgileri,
  TCRBilgileri,
} from '@euys/api-interfaces';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kk8139Facade } from '../../../../+state/kk-8139.facade';
import { CmPratigiDialogComponent } from '../../../shared/cm-pratigi-dialog/cm-pratigi-dialog.component';
import { MfsDialogComponent } from '../../../shared/mfs-dialog/mfs-dialog.component';
import { SmPratigiDialogComponent } from '../../../shared/sm-pratigi-dialog/sm-pratigi-dialog.component';
import { isDispozeBobin } from '../../../../utils/rules';
import { map } from 'rxjs/operators';

@Component({
  selector: 'euys-qc-kayit-third-step',
  templateUrl: './qc-kayit-third-step.component.html',
  styleUrls: ['./qc-kayit-third-step.component.scss'],
})
export class QcKayitThirdStepComponent implements OnDestroy {
  @Output() goToPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() preserveSecondStepState: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  cmDialogRef: DynamicDialogRef;
  smDialogRef: DynamicDialogRef;

  qcKayitBilgileri$: Observable<QCKayitBilgileri>;
  qcKayitBilgileriLoaded$: Observable<boolean>;
  tcrBilgileriList$: Observable<TCRBilgileri[]>;
  oncekiHatKusurList$: Observable<OncekiHatKusur[]>;

  dispozeBobin$ = this.facade.qcKayitBilgileri$.pipe(
    map(qcKayitBilgileri => isDispozeBobin(qcKayitBilgileri?.dispozeKodu))
  );

  _endSubscription = new Subject<boolean>();

  constructor(
    public config: DynamicDialogConfig,
    private dialogService: DialogService,
    private facade: Kk8139Facade
  ) {
    this.qcKayitBilgileri$ = this.facade.qcKayitBilgileri$;
    this.qcKayitBilgileriLoaded$ = this.facade.qcKayitBilgileriLoaded$;
    this.tcrBilgileriList$ = this.facade.tcrBilgileriList$;
    this.oncekiHatKusurList$ = this.facade.oncekiHatKusurList$;
  }

  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }

  goToSecondPage() {
    this.goToPage.emit(1);
    this.preserveSecondStepState.emit(true);
  }

  goToFourthPage() {
    this.goToPage.emit(3);
  }

  onChangeUretimDegeri(uretimDegerleri: HSM1UretimDegerleri) {
    this.facade.updateUretimDegerleri(uretimDegerleri);
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
