import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1244Component } from './container/kt-1244.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1244 from './+state/kt-1244.reducer';
import { Kt1244Effects } from './+state/kt-1244.effects';
import { Kt1244Facade } from './+state/kt-1244.facade';
import { Kt1244Service } from './services/kt-1244.service';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';

const routes: Routes = [{ path: '', component: Kt1244Component }];

@NgModule({
  declarations: [Kt1244Component],
  imports: [
    SharedUiModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature(fromKt1244.KT_1244_FEATURE_KEY, fromKt1244.reducer),
    EffectsModule.forFeature([Kt1244Effects]),
    RouterModule.forChild(routes),

  ],
  providers: [Kt1244Facade,Kt1244Service],
})
export class Kt1244Module {}
