import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1340Effects } from './+state/kt-1340.effects';
import { Kt1340Facade } from './+state/kt-1340.facade';
import * as fromKt1340 from './+state/kt-1340.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1340Component } from './container/kt-1340.component';
import { Kt1340Service } from './services/kt-1340.service';

const routes: Routes = [{ path: '', component: Kt1340Component }];

@NgModule({
  declarations: [
    Kt1340Component,
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
    StoreModule.forFeature(fromKt1340.KT_1340_FEATURE_KEY, fromKt1340.reducer),
    EffectsModule.forFeature([Kt1340Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1340Facade, Kt1340Service],
})
export class Kt1340Module {}
