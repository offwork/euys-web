import * as fromKt1359 from './+state/kt-1359.reducer';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { Kt1359Component } from './container/kt-1359.component';
import { Kt1359Effects } from './+state/kt-1359.effects';
import { Kt1359Facade } from './+state/kt-1359.facade';
import { Kt1359Service } from './services/kt-1359.service';
import { NgModule } from '@angular/core';
import { PickListService } from './components/pick-list/pick-list.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { StoreModule } from '@ngrx/store';
import { UrunKoduDialogComponent } from './components/urun-kodu-dialog/urun-kodu-dialog.component';
import { UrunKoduListComponent } from './components/urun-kodu-list/urun-kodu-list.component';
import { UrunPipe } from './pipes/urun.pipe';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { YaglamaListComponent } from './components/yaglama-list/yaglama-list.component';
import { YaglamaSpesifikasyonFormComponent } from './components/yaglama-spesifikasyon-form/yaglama-spesifikasyon-form.component';
import { DialogService } from 'primeng/dynamicdialog';

const routes: Routes = [{ path: '', component: Kt1359Component }];

@NgModule({
  declarations: [
    KalitelerPickListComponent,
    Kt1359Component,
    UrunKoduDialogComponent,
    UrunKoduListComponent,
    UrunPipe,
    UrunlerPickListComponent,
    YaglamaListComponent,
    YaglamaSpesifikasyonFormComponent,
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1359.KT_1359_FEATURE_KEY, fromKt1359.reducer),
    EffectsModule.forFeature([Kt1359Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1359Facade, Kt1359Service, PickListService, DialogService],
})
export class Kt1359Module {}
