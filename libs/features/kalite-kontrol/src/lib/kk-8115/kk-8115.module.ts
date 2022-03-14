import * as fromKk8115 from './+state/kk-8115.reducer';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Kk8115Component } from './container/kk-8115.component';
import { Kk8115Effects } from './+state/kk-8115.effects';
import { Kk8115Facade } from './+state/kk-8115.facade';
import { Kk8115Service } from './services/kk-8115.service';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { FmPratigiDialogComponent } from './components/fm-pratigi-dialog/fm-pratigi-dialog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { SlabBilgisiDialogComponent } from './components/slab-bilgisi-dialog/slab-bilgisi-dialog.component';
import { StoreModule } from '@ngrx/store';
import { Hsm2BobinListComponent } from './components/hsm2-bobin-list/hsm2-bobin-list.component';
import { HsmModule } from '../shared/hsm/hsm.module';
import { Hsm2QcUretimBilgisiComponent } from './components/hsm2-qc-uretim-bilgisi/hsm2-qc-uretim-bilgisi.component';
import { MessageService } from 'primeng/api';
import { Hsm2QcOptionsComponent } from './components/hsm2-qc-options/hsm2-qc-options.component';
import { FeaturesKaliteKontrolSharedModule } from '../shared/features-kalite-kontrol-shared.module';
import { Hsm2UretimDegerleriComponent } from './components/hsm2-qc-olcum/hsm2-uretim-degerleri.component';

const routes: Routes = [{ path: '', component: Kk8115Component }];

@NgModule({
  declarations: [
    Kk8115Component,
    SlabBilgisiDialogComponent,
    FmPratigiDialogComponent,
    Hsm2BobinListComponent,
    Hsm2QcUretimBilgisiComponent,
    Hsm2QcOptionsComponent,
    Hsm2UretimDegerleriComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([Kk8115Effects]),
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    RouterModule.forChild(routes),
    SharedUiModule,
    FeaturesKaliteKontrolSharedModule,
    HsmModule,
    StoreModule.forFeature(fromKk8115.KK_8115_FEATURE_KEY, fromKk8115.reducer),
  ],
  providers: [Kk8115Facade, Kk8115Service, DialogService, MessageService],
})
export class Kk8115Module {}
