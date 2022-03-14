import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1326Effects } from './+state/kt-1326.effects';
import { Kt1326Facade } from './+state/kt-1326.facade';
import { Kt1326Service } from './services/kt-1326.service';
import * as fromKt1326 from './+state/kt-1326.reducer';
import { Kt1326Component } from './container/kt-1326.component';
import { SharedUiModule } from '@euys/shared/ui';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';

const routes: Routes = [{ path: '', component: Kt1326Component }];

@NgModule({
  declarations: [
    Kt1326Component,
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
    StoreModule.forFeature(fromKt1326.KT_1326_FEATURE_KEY, fromKt1326.reducer),
    EffectsModule.forFeature([Kt1326Effects]),
  ],
  providers: [Kt1326Facade, Kt1326Service],
})
export class Kt1326Module {}
