import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1313Effects } from './+state/kt-1313.effects';
import { Kt1313Facade } from './+state/kt-1313.facade';
import * as fromKt1313 from './+state/kt-1313.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1313Component } from './container/kt-1313.component';
import { Kt1313Service } from './services/kt-1313.service';

const routes: Routes = [{ path: '', component: Kt1313Component }];

@NgModule({
  declarations: [
    Kt1313Component,
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
    StoreModule.forFeature(fromKt1313.KT_1313_FEATURE_KEY, fromKt1313.reducer),
    EffectsModule.forFeature([Kt1313Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1313Facade, Kt1313Service],
})
export class Kt1313Module {}
