import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1332Effects } from './+state/kt-1332.effects';
import { Kt1332Facade } from './+state/kt-1332.facade';
import * as fromKt1332 from './+state/kt-1332.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1332Component } from './container/kt-1332.component';
import { Kt1332Service } from './services/kt-1332.service';

const routes: Routes = [{ path: '', component: Kt1332Component }];

@NgModule({
  declarations: [
    Kt1332Component,
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
    StoreModule.forFeature(fromKt1332.KT_1332_FEATURE_KEY, fromKt1332.reducer),
    EffectsModule.forFeature([Kt1332Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1332Facade, Kt1332Service],
})
export class Kt1332Module {}
