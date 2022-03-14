import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1341Effects } from './+state/kt-1341.effects';
import { Kt1341Facade } from './+state/kt-1341.facade';
import * as fromKt1341 from './+state/kt-1341.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1341Component } from './container/kt-1341.component';
import { Kt1341Service } from './services/kt-1341.service';

const routes: Routes = [{ path: '', component: Kt1341Component }];

@NgModule({
  declarations: [
    Kt1341Component,
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
    StoreModule.forFeature(fromKt1341.KT_1340_FEATURE_KEY, fromKt1341.reducer),
    EffectsModule.forFeature([Kt1341Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1341Facade, Kt1341Service],
})
export class Kt1341Module {}
