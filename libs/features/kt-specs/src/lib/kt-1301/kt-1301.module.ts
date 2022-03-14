import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1301Effects } from './+state/kt-1301.effects';
import { Kt1301Facade } from './+state/kt-1301.facade';
import * as fromKt1301 from './+state/kt-1301.reducer';
import { KalitelerPickListComponent } from './component/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './component/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './component/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './component/viewing-list/viewing-list.component';
import { Kt1301Component } from './container/kt-1301.component';
import { Kt1301Service } from './services/kt-1301.service';

const routes: Routes = [{ path: '', component: Kt1301Component }];

@NgModule({
  declarations: [
    Kt1301Component,
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
    StoreModule.forFeature(fromKt1301.KT_1301_FEATURE_KEY, fromKt1301.reducer),
    EffectsModule.forFeature([Kt1301Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1301Facade, Kt1301Service],
})
export class Kt1301Module {}
