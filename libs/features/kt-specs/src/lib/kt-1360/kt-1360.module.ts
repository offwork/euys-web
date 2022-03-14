import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1360Effects } from './+state/kt-1360.effects';
import { Kt1360Facade } from './+state/kt-1360.facade';
import * as fromKt1360 from './+state/kt-1360.reducer';
import { KalitelerPickListComponent } from './component/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './component/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './component/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './component/viewing-list/viewing-list.component';
import { Kt1360Component } from './container/kt-1360.component';
import { Kt1360Service } from './services/kt-1360.service';

const routes: Routes = [{ path: '', component: Kt1360Component }];
@NgModule({
  declarations: [
    Kt1360Component,
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
    StoreModule.forFeature(fromKt1360.KT_1360_FEATURE_KEY, fromKt1360.reducer),
    EffectsModule.forFeature([Kt1360Effects]),
  ],
  providers: [Kt1360Service, Kt1360Facade],
})
export class Kt1360Module {}
