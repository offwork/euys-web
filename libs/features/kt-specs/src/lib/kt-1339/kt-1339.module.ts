import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1339Effects } from './+state/kt-1339.effects';
import { Kt1339Facade } from './+state/kt-1339.facade';
import { Kt1339Service } from './services/kt-1339.service';
import * as fromKt1339 from './+state/kt-1339.reducer';
import { Kt1339Component } from './container/kt-1339.component';
import { SharedUiModule } from '@euys/shared/ui';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';

const routes: Routes = [{ path: '', component: Kt1339Component }];

@NgModule({
  declarations: [
    Kt1339Component,
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
    StoreModule.forFeature(fromKt1339.KT_1339_FEATURE_KEY, fromKt1339.reducer),
    EffectsModule.forFeature([Kt1339Effects]),
  ],
  providers: [Kt1339Facade, Kt1339Service],
})
export class Kt1339Module {}
