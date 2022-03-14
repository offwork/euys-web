import { CmPratigiDialogComponent } from '../cm-pratigi-dialog/cm-pratigi-dialog.component';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { MenuItem, Message, MessageService } from 'primeng/api';
import { Kk8139Facade } from '../../../+state/kk-8139.facade';
import { MfsDialogComponent } from '../mfs-dialog/mfs-dialog.component';
import { BagimsizMesajlarDialogComponent } from '../bagimsiz-mesajlar-dialog/bagimsiz-mesajlar-dialog.component';
import { BagimsizNumuneDialogComponent } from '../bagimsiz-numune-dialog/bagimsiz-numune-dialog.component';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  BagimsizNumuneModel,
  CMSMpratigiModelListQueryModel,
  KkUretimYuzeyKusuru,
  QCKayitBilgileri,
  TCRBilgileri,
} from '@euys/api-interfaces';
import { SmPratigiDialogComponent } from '../sm-pratigi-dialog/sm-pratigi-dialog.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'euys-testing-area',
  templateUrl: './testing-area.component.html',
  styleUrls: ['./testing-area.component.scss'],
  providers: [MessageService, DialogService],
})
export class TestingAreaComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean>;
  bagimsizNumune$: Observable<BagimsizNumuneModel[]>;
  qcKayitBilgileri$: Observable<QCKayitBilgileri>;
  qcKayitBilgileriLoaded$: Observable<boolean>;
  tcrBilgileriList$: Observable<TCRBilgileri[]>;

  yuzeyKusurKaydiList$: Observable<KkUretimYuzeyKusuru[]>;
  aktifKusurList$ = this.facade.butunAktifKusurList$;
  dispoze$ = this.facade.dispoze$;
  defaultYuzeyKusurKodu$ = this.facade.defaultYuzeyKusurKodu$;
  minDerece$ = this.facade.minDerece$;

  @Input() toggleable = true;
  testMessages: Message[];

  cmDialogRef: DynamicDialogRef;
  smDialogRef: DynamicDialogRef;
  bagimsizMesajDialogRef: DynamicDialogRef;

  items: MenuItem[];
  bagimsizNumunelistesiInfo: Message[];
  _endSubscription = new Subject<boolean>();

  toasts = [
    { position: 'top-left', key: 'tl' },
    { position: 'top-right', key: 'tr' },
    { position: 'top-center', key: 'tc' },
    { position: 'bottom-left', key: 'bl' },
    { position: 'bottom-right', key: 'br' },
    { position: 'bottom-center', key: 'bc' },
  ];

  constructor(
    public config: DynamicDialogConfig,
    private dialogService: DialogService,
    private messageService: MessageService,
    private facade: Kk8139Facade
  ) {
    this.loading$ = this.facade.bagimsizNumuneLoaded$.pipe(
      map(loaded => !loaded)
    );
    this.bagimsizNumune$ = this.facade.bagimsizNumune$;
    this.qcKayitBilgileri$ = this.facade.qcKayitBilgileri$;
    this.qcKayitBilgileriLoaded$ = this.facade.qcKayitBilgileriLoaded$;
    this.tcrBilgileriList$ = this.facade.tcrBilgileriList$;

    this.testMessages = [
      { severity: 'success', summary: 'Success', detail: 'Message Content' },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
      { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
      { severity: 'error', summary: 'Error', detail: 'Message Content' },
    ];
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
              this.update();
            },
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
              this.delete();
            },
          },
        ],
      },
      {
        label: 'Navigate',
        items: [
          {
            label: 'Angular Website',
            icon: 'pi pi-external-link',
            url: 'http://angular.io',
          },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload',
          },
        ],
      },
    ];
    this.bagimsizNumunelistesiInfo = [
      {
        severity: 'info',
        summary: 'Api model oluşturulacak',
        detail:
          'Backend veri modeli ile aynı isimlendirme ile api model oluşturulacak. Table componentinde gösterilecek',
      },
      // { severity: 'success', summary: 'Success', detail: 'Message Content' },
      // { severity: 'info', summary: 'Info', detail: 'Message Content' },
      // { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
      // { severity: 'error', summary: 'Error', detail: 'Message Content' },
    ];

    this.yuzeyKusurKaydiList$ = this.facade.yuzeyKusurKaydiList$;
  }

  ngOnInit() {
    const qcKayitBilgileriQueryModel: CMSMpratigiModelListQueryModel = {
      hatNo: '331',
      bobinNo: 'C2110000070000',
      qcOnayYapilmis: false,
    };
    this.facade.getBagimsizNumune('331', 'C2110000070000');
    this.facade.getQcKayitBilgileri(qcKayitBilgileriQueryModel);
  }

  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }

  update() {
    this.messageService.add({
      key: 'tl',
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
      sticky: true,
    });
  }

  delete() {
    this.messageService.add({
      key: 'tr',
      severity: 'warn',
      summary: 'Warning',
      detail: 'This is the last warning!',
      sticky: true,
    });
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
    this.cmDialogRef.onClose.subscribe(() => {
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
    this.smDialogRef.onClose.subscribe(() => {
      this.facade.resetSmPratigiList();
    });
  }

  openBagimsizMesajDialog(bobinNo: string = 'C2110000070000') {
    this.bagimsizMesajDialogRef = this.dialogService.open(
      BagimsizMesajlarDialogComponent,
      {
        header: 'Bağimsiz Notlar',
        width: '50vw',
        modal: true,
        data: {
          bobinNo,
        },
      }
    );
    this.bagimsizMesajDialogRef.onClose.subscribe(() => {
      this.facade.resetBagimsizMesajList();
    });
  }

  bagimsizNumuneDialog(bobinNo: string = 'C2110000070000') {
    const bagimsizNumuneDialogRef = this.dialogService.open(
      BagimsizNumuneDialogComponent,
      {
        header: 'Bağımsız Numuneler',
        width: '50vw',
        modal: true,
        data: {
          bobinNo,
        },
      }
    );

    bagimsizNumuneDialogRef.onClose.subscribe(() => {
      this.facade.resetBagimsizNumune();
    });
  }
  mfsDialog(bobinNo: string = '41030054000') {
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
