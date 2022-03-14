import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1319Effects } from './+state/kt-1319.effects';
import { Kt1319Facade } from './+state/kt-1319.facade';
import * as fromKt1319 from './+state/kt-1319.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1319Component } from './container/kt-1319.component';
import { Kt1319Service } from './services/kt-1319.service';

const routes: Routes = [{ path: '', component: Kt1319Component }];

@NgModule({
  declarations: [
    Kt1319Component,
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
    StoreModule.forFeature(fromKt1319.KT_1319_FEATURE_KEY, fromKt1319.reducer),
    EffectsModule.forFeature([Kt1319Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1319Facade, Kt1319Service],
})
export class Kt1319Module {}
