import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1306Effects } from './+state/kt-1306.effects';
import { Kt1306Facade } from './+state/kt-1306.facade';
import * as fromKt1306 from './+state/kt-1306.reducer';
import { KalitelerPickListComponent } from './components/kaliteler-pick-list/kaliteler-pick-list.component';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { UrunlerPickListComponent } from './components/urunler-pick-list/urunler-pick-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1306Component } from './container/kt-1306.component';
import { Kt1306Service } from './services/kt-1306.service';

const routes: Routes = [{ path: '', component: Kt1306Component }];

@NgModule({
  declarations: [
    Kt1306Component,
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
    StoreModule.forFeature(fromKt1306.KT_1306_FEATURE_KEY, fromKt1306.reducer),
    EffectsModule.forFeature([Kt1306Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1306Facade, Kt1306Service],
})
export class Kt1306Module {}
