import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1214Component } from './container/kt-1214.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1214 from './+state/kt-1214.reducer';
import { Kt1214Effects } from './+state/kt-1214.effects';
import { Kt1214Facade } from './+state/kt-1214.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1214Service } from './services/kt-1214.service';

const routes: Routes = [{ path: '', component: Kt1214Component }];

@NgModule({
  declarations: [Kt1214Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1214.KT_1214_FEATURE_KEY, fromKt1214.reducer),
    EffectsModule.forFeature([Kt1214Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1214Facade, Kt1214Service],
})
export class Kt1214Module {}
