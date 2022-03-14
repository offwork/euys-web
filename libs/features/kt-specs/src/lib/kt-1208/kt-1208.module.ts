import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1208Component } from './container/kt-1208.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1208 from './+state/kt-1208.reducer';
import { Kt1208Effects } from './+state/kt-1208.effects';
import { Kt1208Facade } from './+state/kt-1208.facade';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Kt1208Service } from './services/kt-1208.service';

const routes: Routes = [{ path: '', component: Kt1208Component }];


@NgModule({
  declarations: [Kt1208Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1208.KT_1208_FEATURE_KEY, fromKt1208.reducer),
    EffectsModule.forFeature([Kt1208Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1208Facade, Kt1208Service],
})
export class Kt1208Module {}
