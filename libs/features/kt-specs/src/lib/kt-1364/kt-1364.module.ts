import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1364Effects } from './+state/kt-1364.effects';
import { Kt1364Facade } from './+state/kt-1364.facade';
import * as fromKt1364 from './+state/kt-1364.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1364Component } from './container/kt-1364.component';
import { Kt1364Service } from './services/kt-1364.service';

const routes: Routes = [{ path: '', component: Kt1364Component }];
@NgModule({
  declarations: [
    Kt1364Component,
    KalitelerPickListComponent,
    UrunlerPickListComponent,
    ViewingListComponent,
    SaveOrUpdateFormComponent,
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromKt1364.KT_1364_FEATURE_KEY, fromKt1364.reducer),
    EffectsModule.forFeature([Kt1364Effects]),
  ],
  providers: [Kt1364Service, Kt1364Facade],
})
export class Kt1364Module {}
