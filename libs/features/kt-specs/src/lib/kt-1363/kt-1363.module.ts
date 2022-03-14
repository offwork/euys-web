import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1363Effects } from './+state/kt-1363.effects';
import { Kt1363Facade } from './+state/kt-1363.facade';
import * as fromKt1363 from './+state/kt-1363.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1363Component } from './container/kt-1363.component';
import { Kt1363Service } from './services/kt-1363.service';

const routes: Routes = [{ path: '', component: Kt1363Component }];
@NgModule({
  declarations: [
    Kt1363Component,
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
    StoreModule.forFeature(fromKt1363.KT_1363_FEATURE_KEY, fromKt1363.reducer),
    EffectsModule.forFeature([Kt1363Effects]),
  ],
  providers: [Kt1363Service, Kt1363Facade],
})
export class Kt1363Module {}
