import * as fromKk8139 from './+state/kk-8139.reducer';
import { BagimsizMesajlarDialogComponent } from './components/shared/bagimsiz-mesajlar-dialog/bagimsiz-mesajlar-dialog.component';
import { BagimsizNumuneDialogComponent } from './components/shared/bagimsiz-numune-dialog/bagimsiz-numune-dialog.component';
import { CmPratigiDialogComponent } from './components/shared/cm-pratigi-dialog/cm-pratigi-dialog.component';
import { CmPratigiListComponent } from './components/shared/cm-pratigi-list/cm-pratigi-list.component';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HSMBobinListComponent } from './components/shared/hsm-bobin-list/hsm-bobin-list.component';
import { Hsm1StepperComponent } from './components/hsm1-stepper/hsm1-stepper.component';
import { Kk8139Component } from './container/kk-8139.component';
import { Kk8139Effects } from './+state/kk-8139.effects';
import { Kk8139Facade } from './+state/kk-8139.facade';
import { Kk8139Service } from './services/kk-8139.service';
import { NgModule } from '@angular/core';
import { NumuneGoruntulemeSecondStepComponent } from './components/hsm1-stepper/steps/numune-goruntuleme-second-step/numune-goruntuleme-second-step.component';
import { QcListComponent } from './components/hsm1-stepper/steps/qc-list-first-step/qc-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { SmPratigiDialogComponent } from './components/shared/sm-pratigi-dialog/sm-pratigi-dialog.component';
import { SmPratigiListComponent } from './components/shared/sm-pratigi-list/sm-pratigi-list.component';
import { StoreModule } from '@ngrx/store';
import { UrunFotograflariSayfasinaGitButtonComponent } from './components/shared/urun-fotograflari-sayfasina-git-button/urun-fotograflari-sayfasina-git-button.component';
import { TestingAreaComponent } from './components/shared/testing-area/testing-area.component';
import { MessageService } from 'primeng/api';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { ImageModule } from 'primeng/image';
import { MfsDialogComponent } from './components/shared/mfs-dialog/mfs-dialog.component';
import { HsmModule } from '../shared/hsm/hsm.module';
import { TcrListComponent } from './components/shared/tcr-list/tcr-list.component';
import { QcKayitThirdStepComponent } from './components/hsm1-stepper/steps/qc-kayit-third-step/qc-kayit-third-step.component';
import { OncekiHatKusurComponent } from './components/shared/onceki_hat_kusur/onceki-hat-kusur.component';
import { UretimBilgileriComponent } from './components/shared/uretim-bilgileri/uretim-bilgileri.component';
import { FeaturesKaliteKontrolSharedModule } from '../shared/features-kalite-kontrol-shared.module';
import { Hsm1QcOlcumComponent } from './components/shared/hsm1-qc-olcum/hsm1-qc-olcum.component';
import { KusurFourthStepComponent } from './components/hsm1-stepper/steps/kusur-fourth-step/kusur-fourth-step.component';
import { QcKayitOnayFifthComponent } from './components/hsm1-stepper/steps/qc-kayit-onay-fifth/qc-kayit-onay-fifth.component';

const routes: Routes = [{ path: '', component: Kk8139Component }];

@NgModule({
  declarations: [
    BagimsizMesajlarDialogComponent,
    BagimsizNumuneDialogComponent,
    CmPratigiDialogComponent,
    CmPratigiListComponent,
    HSMBobinListComponent,
    Hsm1QcOlcumComponent,
    Hsm1StepperComponent,
    Kk8139Component,
    MfsDialogComponent,
    NumuneGoruntulemeSecondStepComponent,
    OncekiHatKusurComponent,
    QcKayitThirdStepComponent,
    QcListComponent,
    SmPratigiDialogComponent,
    SmPratigiListComponent,
    TcrListComponent,
    TestingAreaComponent,
    UretimBilgileriComponent,
    UrunFotograflariSayfasinaGitButtonComponent,
    KusurFourthStepComponent,
    QcKayitOnayFifthComponent,
  ],
  imports: [
    ImageModule,
    CommonModule,
    SharedUiModule,
    FormsModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    FeaturesKaliteKontrolSharedModule,
    HsmModule,
    StoreModule.forFeature(fromKk8139.KK_8139_FEATURE_KEY, fromKk8139.reducer),
    EffectsModule.forFeature([Kk8139Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [
    Kk8139Facade,
    Kk8139Service,
    MessageService,
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig,
  ],
})
export class Kk8139Module {}
