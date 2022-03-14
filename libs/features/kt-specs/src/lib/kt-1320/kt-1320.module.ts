import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1320Effects } from './+state/kt-1320.effects';
import { Kt1320Facade } from './+state/kt-1320.facade';
import * as fromKt1320 from './+state/kt-1320.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1320Component } from './container/kt-1320.component';
import { Kt1320Service } from './services/kt-1320.service';

const routes: Routes = [{ path: '', component: Kt1320Component }];

@NgModule({
  declarations: [
    Kt1320Component,
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
    StoreModule.forFeature(fromKt1320.KT_1320_FEATURE_KEY, fromKt1320.reducer),
    EffectsModule.forFeature([Kt1320Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1320Facade, Kt1320Service],
})
export class Kt1320Module {}
