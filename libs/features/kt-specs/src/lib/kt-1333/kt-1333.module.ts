import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1333Effects } from './+state/kt-1333.effects';
import { Kt1333Facade } from './+state/kt-1333.facade';
import { Kt1333Service } from './services/kt-1333.service';
import * as fromKt1333 from './+state/kt-1333.reducer';
import { Kt1333Component } from './container/kt-1333.component';
import { SharedUiModule } from '@euys/shared/ui';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';

const routes: Routes = [{ path: '', component: Kt1333Component }];

@NgModule({
  declarations: [
    Kt1333Component,
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
    StoreModule.forFeature(fromKt1333.KT_1333_FEATURE_KEY, fromKt1333.reducer),
    EffectsModule.forFeature([Kt1333Effects]),
  ],
  providers: [Kt1333Facade, Kt1333Service],
})
export class Kt1333Module {}
