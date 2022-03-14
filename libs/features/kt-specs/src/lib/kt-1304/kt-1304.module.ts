import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1304Effects } from './+state/kt-1304.effects';
import { Kt1304Facade } from './+state/kt-1304.facade';
import * as fromKt1304 from './+state/kt-1304.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1304Component } from './container/kt-1304.component';
import { Kt1304Service } from './services/kt-1304.service';

const routes: Routes = [{ path: '', component: Kt1304Component }];

@NgModule({
  declarations: [
    Kt1304Component,
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
    StoreModule.forFeature(fromKt1304.KT_1304_FEATURE_KEY, fromKt1304.reducer),
    EffectsModule.forFeature([Kt1304Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1304Facade, Kt1304Service],
})
export class Kt1304Module {}
