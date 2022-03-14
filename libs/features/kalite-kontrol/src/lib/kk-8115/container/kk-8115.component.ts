import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  BobinKalinlikDegerleri,
  ButtonClass,
  EvetHayir,
  HSM2UretimDegerleri,
  HSMBobinModel,
  KkUretimYuzeyKusuru,
  QCOnayModel,
} from '@euys/api-interfaces';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { Kk8115Facade } from '../+state/kk-8115.facade';
import { YuzeyKusurKaydiComponent } from '../../shared/components/yuzey-kusur-kaydi/yuzey-kusur-kaydi.component';
import { KabaHaddelemePasoDialogComponent } from '../../shared/hsm/components/kaba-haddeleme-dialog/kaba-haddeleme-dialog.component';
import { FmPratigiDialogComponent } from '../components/fm-pratigi-dialog/fm-pratigi-dialog.component';
import { SlabBilgisiDialogComponent } from '../components/slab-bilgisi-dialog/slab-bilgisi-dialog.component';
import { Hsm2QcOptions } from '../models/hsm2-options';
import { isDispozeBobin } from '../utils/rules';

@Component({
  selector: 'euys-kk8115',
  templateUrl: './kk-8115.component.html',
})
export class Kk8115Component implements OnInit, OnDestroy {
  @ViewChild(YuzeyKusurKaydiComponent)
  yuzeyKusuruKayitComponent: YuzeyKusurKaydiComponent;

  destroy$ = new Subject<void>();
  stepIndex$ = this.facade.stepIndex$;
  bobinListLoaded$ = this.facade.hsmBobinListLoaded$;
  bagimsizNumuneList$ = this.facade.bagimsizNumuneList$;
  bagimsizNumuneListLoaded$ = this.facade.bagimsizNumuneListLoaded$;
  bagimsizMesajList$ = this.facade.bagimsizMesajList$;
  bagimsizMesajListLoaded$ = this.facade.bagimsizMesajListLoaded$;
  bobinAcmaKontrol$ = this.facade.bobinAcmaKontrol$;
  disableYuzeyKusuru$ = this.facade.disableYuzeyKusuruVarMi$;
  kabaHaddelemePaso$ = this.facade.kabaHaddelemePaso$;
  kabaHaddelemePasoLoaded$ = this.facade.kabaHaddelemePasoLoaded$;
  numuneAl$ = this.facade.numuneAl$;
  numuneAlmaIsareti$ = this.facade.standartNumuneIsareti$;
  showNumuneAlCombo$ = this.facade.showNumuneAlCombo$;
  slabBilgisi$ = this.facade.slabBilgisi$;
  slabBilgisiLoaded$ = this.facade.slabBilgisiLoaded$;
  yuzeyKusuruVarMi$ = this.facade.yuzeyKusuruVarMi$;
  defaultYuzeyKusurKodu$ = this.facade.defaultYuzeyKusurKodu$;
  dispoze$ = this.facade.dispoze$;
  minDerece$ = this.facade.minDerece$;

  activeIndex = 0;
  bobinKalinlikDegerleri$: Observable<BobinKalinlikDegerleri> =
    this.facade.bobinKalinlikDegerleri$;
  qcKayitBilgileriLoaded$: Observable<boolean>;
  qcKayitBilgileri$ = this.facade.qcKayitBilgileri$;
  yuzeyKusurKaydiList$ = this.facade.yuzeyKusurKaydiList$;
  yuzeyKusurKaydiListLoaded$ = this.facade.yuzeyKusurKaydiListLoaded$;
  aktifKusurList$ = this.facade.butunAktifKusurList$;
  aktifKusurListLoaded$ = this.facade.butunAktifKusurListLoaded$;
  dispozeBobin$ = this.facade.qcKayitBilgileri$.pipe(
    map(qcKayitBilgileri => isDispozeBobin(qcKayitBilgileri?.dispozeKodu))
  );
  qcOnay$ = this.facade.qcOnay$;
  uretimDegerleri$ = this.facade.uretimDegerleri$;

  kabaHaddelemeDialogRef: DynamicDialogRef;
  fmPratigiDialogRef: DynamicDialogRef;
  dialogButtonClass = ButtonClass.Dialog;
  navigationButtonClass = ButtonClass.Navigation;

  steps: MenuItem[] = [
    {
      label: 'Bobin Listesi',
    },
    {
      label: 'Bağımsız Numuneler',
    },
    {
      label: '2. Sıcak Haddehane QC Kaydı',
    },
    {
      label: 'Yüzey Kusur Kaydı',
    },
    {
      label: '2. Sıcak Haddehane QC Kayıt/Karar',
    },
  ];
  selectedBobinList: HSMBobinModel[] = [];

  constructor(
    public facade: Kk8115Facade,
    public dialogService: DialogService
  ) {
    this.qcKayitBilgileriLoaded$ = this.facade.qcKayitBilgileriLoaded$;
    this.stepIndex$.pipe(takeUntil(this.destroy$)).subscribe(index => {
      this.activeIndex = index;
    });
  }

  get bobin(): HSMBobinModel | null {
    if (this.selectedBobinList?.length === 1) {
      return this.selectedBobinList[0];
    } else {
      return null;
    }
  }

  ngOnInit() {
    this.facade.init();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openSlabBilgisiDialog(bobinNo: string = 'C2110000010000') {
    const dialogRef = this.dialogService.open(SlabBilgisiDialogComponent, {
      header: 'Slab Bilgisi',
      width: '50vw',
      modal: true,
      data: bobinNo,
    });

    dialogRef.onClose.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.facade.resetSlabBilgisi();
    });
  }
  openKabaHaddeleme(bobinNo: string = 'C2110000070000') {
    if (!bobinNo) {
      return;
    }
    this.facade.getKabaHaddelemePaso('331', bobinNo);
    const dialogRef = this.dialogService.open(
      KabaHaddelemePasoDialogComponent,
      {
        header: 'Kaba Haddeleme',
        width: '50vw',
        modal: true,
        data: {
          kabaHaddelemeBilgisi$: this.facade.kabaHaddelemePaso$,
          kabaHaddelemePasoLoaded$: this.facade.kabaHaddelemePasoLoaded$,
        },
      }
    );

    dialogRef.onClose.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.facade.resetKabaHaddelemePaso();
    });
  }
  openFmPratigiBilgileri(bobinNo: string = 'C2110000010000') {
    const dialogRef = this.dialogService.open(FmPratigiDialogComponent, {
      header: 'Fm Pratigi',
      width: '50vw',
      modal: true,
      data: bobinNo,
    });

    dialogRef.onClose.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.facade.resetFmBilgileri();
    });
  }

  onSelectionChange(bobinListesi: HSMBobinModel[]) {
    this.selectedBobinList = [...bobinListesi];
  }

  prev() {
    if (this.activeIndex !== 4) {
      this.facade.goTo(this.activeIndex - 1);
      return;
    } else {
      this.facade.yuzeyKusuruVarMi$
        .pipe(
          take(1),
          map(yuzeyKusuruVarMi => yuzeyKusuruVarMi === EvetHayir.EVET)
        )
        .subscribe(yuzeyKusuruVar => {
          if (yuzeyKusuruVar) {
            this.facade.goTo(3);
          } else this.facade.goTo(2);
        });
    }
  }

  next() {
    if (this.activeIndex === 0) {
      this.bobinListeNext();
    } else if (this.activeIndex === 1) {
      this.bagimsizNumuneNext();
    } else if (this.activeIndex === 2) {
      this.qcKayitKararNext();
    } else if (this.activeIndex === 3) {
      this.yuzeyKusurKaydiNext();
    }
  }

  bobinListeNext() {
    const topluKayit = this.selectedBobinList?.length > 1;
    if (topluKayit) {
      console.error('Toplu kayıt yapılmalı!');
      return;
    }
    if (!this.selectedBobinList?.length) {
      console.error('Seçim yapılmalı!');
      return;
    }

    const { bobinNo } = this.selectedBobinList[0];
    this.facade.getBagimsizNumuneEkranBilgileri(bobinNo);
    this.facade.getQcKayitBilgileri(bobinNo);
    this.facade.goTo(1);
  }

  bagimsizNumuneNext() {
    this.facade.goTo(this.activeIndex + 1);
  }

  qcKayitKararNext() {
    this.facade.yuzeyKusuruVarMi$
      .pipe(
        take(1),
        map(yuzeyKusuruVarMi => yuzeyKusuruVarMi === EvetHayir.EVET),
        map(yuzeyKusuruVar => (yuzeyKusuruVar ? 3 : 4))
      )
      .subscribe(nextIndex => {
        this.facade.goTo(nextIndex);
      });
  }

  yuzeyKusurKaydiNext() {
    const valid = this.yuzeyKusuruKayitComponent?.isFormValid();
    if (valid) {
      this.facade.goTo(this.activeIndex + 1);
    } else console.error(this.yuzeyKusuruKayitComponent.formGroup.errors);
  }

  topluKayit() {
    const topluKayit = this.selectedBobinList?.length > 1;
    const disableTopluKayit = this.selectedBobinList.some(
      bobin => bobin.topluKayit === EvetHayir.HAYIR
    );
    if (topluKayit && disableTopluKayit) {
      console.error('Toplu kayıt yapılamaz!');
      return;
    }
    if (!this.selectedBobinList?.length) {
      console.error('Seçim yapılmalı!');
      return;
    }
  }

  onBobinKalinlikUpdate(value: BobinKalinlikDegerleri) {
    this.facade.updateBobinKalinlikDegerleriState(value);
  }

  onYuzeyKusurUpdate(value: KkUretimYuzeyKusuru[]) {
    this.facade.updateYuzeyKusurDegerleriState(value);
  }

  onChangeAciklama(value: string) {
    this.facade.updateAciklama(value);
  }

  onChangeOptions(options: Hsm2QcOptions) {
    this.facade.updateHsm2QcOptions(options);
  }

  onChangeUretimDegeri(uretimDegerleri: HSM2UretimDegerleri) {
    this.facade.updateUretimDegerleri(uretimDegerleri);
  }

  qcKayit(qcOnay: QCOnayModel) {
    this.facade.qcKayit(qcOnay);
  }
}
