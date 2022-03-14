import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1321Effects } from './+state/kt-1321.effects';
import { Kt1321Facade } from './+state/kt-1321.facade';
import * as fromKt1321 from './+state/kt-1321.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1321Component } from './container/kt-1321.component';
import { Kt1321Service } from './services/kt-1321.service';

const routes: Routes = [{ path: '', component: Kt1321Component }];

@NgModule({
  declarations: [
    Kt1321Component,
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
    StoreModule.forFeature(fromKt1321.KT_1321_FEATURE_KEY, fromKt1321.reducer),
    EffectsModule.forFeature([Kt1321Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1321Facade, Kt1321Service],
})
export class Kt1321Module {}
