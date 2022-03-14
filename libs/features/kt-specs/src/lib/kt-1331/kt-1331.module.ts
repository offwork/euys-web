import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1331Effects } from './+state/kt-1331.effects';
import { Kt1331Facade } from './+state/kt-1331.facade';
import * as fromKt1331 from './+state/kt-1331.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1331Component } from './container/kt-1331.component';
import { Kt1331Service } from './services/kt-1331.service';

const routes: Routes = [{ path: '', component: Kt1331Component }];

@NgModule({
  declarations: [
    Kt1331Component,
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
    StoreModule.forFeature(fromKt1331.KT_1331_FEATURE_KEY, fromKt1331.reducer),
    EffectsModule.forFeature([Kt1331Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1331Facade, Kt1331Service],
})
export class Kt1331Module {}
