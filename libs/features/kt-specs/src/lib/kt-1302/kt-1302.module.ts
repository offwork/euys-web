import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1302Effects } from './+state/kt-1302.effects';
import { Kt1302Facade } from './+state/kt-1302.facade';
import * as fromKt1302 from './+state/kt-1302.reducer';
import { KalitelerPickListComponent } from './component/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './component/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './component/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './component/viewing-list/viewing-list.component';
import { Kt1302Component } from './container/kt-1302.component';
import { Kt1302Service } from './services/kt-1302.service';

const routes: Routes = [{ path: '', component: Kt1302Component }];

@NgModule({
  declarations: [
    Kt1302Component,
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
    StoreModule.forFeature(fromKt1302.KT_1302_FEATURE_KEY, fromKt1302.reducer),
    EffectsModule.forFeature([Kt1302Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1302Facade, Kt1302Service],
})
export class Kt1302Module {}
