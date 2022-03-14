import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1303Effects } from './+state/kt-1303.effects';
import { Kt1303Facade } from './+state/kt-1303.facade';
import * as fromKt1303 from './+state/kt-1303.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1303Component } from './container/kt-1303.component';
import { Kt1303Service } from './services/kt-1303.service';

const routes: Routes = [{ path: '', component: Kt1303Component }];

@NgModule({
  declarations: [
    Kt1303Component,
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
    StoreModule.forFeature(fromKt1303.KT_1303_FEATURE_KEY, fromKt1303.reducer),
    EffectsModule.forFeature([Kt1303Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1303Facade, Kt1303Service],
})
export class Kt1303Module {}
