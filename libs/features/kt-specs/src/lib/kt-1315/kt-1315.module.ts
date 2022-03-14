import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1315Effects } from './+state/kt-1315.effects';
import { Kt1315Facade } from './+state/kt-1315.facade';
import * as fromKt1315 from './+state/kt-1315.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1315Component } from './container/kt-1315.component';
import { Kt1315Service } from './services/kt-1315.service';

const routes: Routes = [{ path: '', component: Kt1315Component }];

@NgModule({
  declarations: [
    Kt1315Component,
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
    StoreModule.forFeature(fromKt1315.KT_1315_FEATURE_KEY, fromKt1315.reducer),
    EffectsModule.forFeature([Kt1315Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1315Facade, Kt1315Service],
})
export class Kt1315Module {}
