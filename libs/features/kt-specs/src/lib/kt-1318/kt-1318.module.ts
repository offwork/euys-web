import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1318Effects } from './+state/kt-1318.effects';
import { Kt1318Facade } from './+state/kt-1318.facade';
import * as fromKt1318 from './+state/kt-1318.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1318Component } from './container/kt-1318.component';
import { Kt1318Service } from './services/kt-1318.service';

const routes: Routes = [{ path: '', component: Kt1318Component }];

@NgModule({
  declarations: [
    Kt1318Component,
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
    StoreModule.forFeature(fromKt1318.KT_1318_FEATURE_KEY, fromKt1318.reducer),
    EffectsModule.forFeature([Kt1318Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1318Facade, Kt1318Service],
})
export class Kt1318Module {}
