import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1362Effects } from './+state/kt-1362.effects';
import { Kt1362Facade } from './+state/kt-1362.facade';
import * as fromKt1362 from './+state/kt-1362.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1362Component } from './container/kt-1362.component';
import { Kt1362Service } from './services/kt-1362.service';

const routes: Routes = [{ path: '', component: Kt1362Component }];
@NgModule({
  declarations: [
    Kt1362Component,
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
    StoreModule.forFeature(fromKt1362.KT_1362_FEATURE_KEY, fromKt1362.reducer),
    EffectsModule.forFeature([Kt1362Effects]),
  ],
  providers: [Kt1362Service, Kt1362Facade],
})
export class Kt1362Module {}
