import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1325Effects } from './+state/kt-1325.effects';
import { Kt1325Facade } from './+state/kt-1325.facade';
import { Kt1325Service } from './services/kt-1325.service';
import * as fromKt1325 from './+state/kt-1325.reducer';
import { Kt1325Component } from './container/kt-1325.component';
import { SharedUiModule } from '@euys/shared/ui';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';

const routes: Routes = [{ path: '', component: Kt1325Component }];

@NgModule({
  declarations: [
    Kt1325Component,
    UrunlerPickListComponent,
    KalitelerPickListComponent,
    SaveOrUpdateFormComponent,
    ViewingListComponent,
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromKt1325.KT_1325_FEATURE_KEY, fromKt1325.reducer),
    EffectsModule.forFeature([Kt1325Effects]),
  ],
  providers: [Kt1325Facade, Kt1325Service],
})
export class Kt1325Module {}
