import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1314Effects } from './+state/kt-1314.effects';
import { Kt1314Facade } from './+state/kt-1314.facade';
import * as fromKt1314 from './+state/kt-1314.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1314Component } from './container/kt-1314.component';
import { Kt1314Service } from './services/kt-1314.service';

const routes: Routes = [{ path: '', component: Kt1314Component }];

@NgModule({
  declarations: [
    Kt1314Component,
    SaveOrUpdateFormComponent,
    UrunlerPickListComponent,
    KalitelerPickListComponent,
    ViewingListComponent,
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1314.KT_1314_FEATURE_KEY, fromKt1314.reducer),
    EffectsModule.forFeature([Kt1314Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1314Facade, Kt1314Service],
})
export class Kt1314Module {}
