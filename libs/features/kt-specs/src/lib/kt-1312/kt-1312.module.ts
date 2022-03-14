import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1312Effects } from './+state/kt-1312.effects';
import { Kt1312Facade } from './+state/kt-1312.facade';
import * as fromKt1312 from './+state/kt-1312.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1312Component } from './container/kt-1312.component';
import { Kt1312Service } from './services/kt-1312.service';

const routes: Routes = [{ path: '', component: Kt1312Component }];

@NgModule({
  declarations: [
    Kt1312Component,
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
    StoreModule.forFeature(fromKt1312.KT_1312_FEATURE_KEY, fromKt1312.reducer),
    EffectsModule.forFeature([Kt1312Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1312Facade, Kt1312Service],
})
export class Kt1312Module {}
