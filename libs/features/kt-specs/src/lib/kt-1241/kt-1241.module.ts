import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1241Effects } from './+state/kt-1241.effects';
import { Kt1241Facade } from './+state/kt-1241.facade';
import * as fromKt1241 from './+state/kt-1241.reducer';
import { Kt1241Component } from './container/kt-1241.component';
import { Kt1241Service } from './services/kt-1241.service';

const routes: Routes = [{ path: '', component: Kt1241Component }];

@NgModule({
  declarations: [Kt1241Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1241.KT_1241_FEATURE_KEY, fromKt1241.reducer),
    EffectsModule.forFeature([Kt1241Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1241Facade, Kt1241Service],
})
export class Kt1241Module {}
