import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1258Effects } from './+state/kt-1258.effects';
import { Kt1258Facade } from './+state/kt-1258.facade';
import * as fromKt1258 from './+state/kt-1258.reducer';
import { Kt1258Component } from './container/kt-1258.component';
import { Kt1258Service } from './services/kt-1258.service';

const routes: Routes = [{ path: '', component: Kt1258Component }];

@NgModule({
  declarations: [Kt1258Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1258.KT_1258_FEATURE_KEY, fromKt1258.reducer),
    EffectsModule.forFeature([Kt1258Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1258Facade, Kt1258Service],
})
export class Kt1258Module {}
