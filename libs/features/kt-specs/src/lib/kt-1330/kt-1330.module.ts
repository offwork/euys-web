import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1330Effects } from './+state/kt-1330.effects';
import { Kt1330Facade } from './+state/kt-1330.facade';
import * as fromKt1330 from './+state/kt-1330.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1330Component } from './container/kt-1330.component';
import { Kt1330Service } from './services/kt-1330.service';

const routes: Routes = [{ path: '', component: Kt1330Component }];

@NgModule({
  declarations: [
    Kt1330Component,
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
    StoreModule.forFeature(fromKt1330.KT_1330_FEATURE_KEY, fromKt1330.reducer),
    EffectsModule.forFeature([Kt1330Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1330Facade, Kt1330Service],
})
export class Kt1330Module {}
