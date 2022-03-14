import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1253Component } from './container/kt-1253.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1253 from './+state/kt-1253.reducer';
import { Kt1253Effects } from './+state/kt-1253.effects';
import { Kt1253Facade } from './+state/kt-1253.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1253Service } from './services/kt-1253.service';

const routes: Routes = [{ path: '', component: Kt1253Component }];

@NgModule({
  declarations: [Kt1253Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1253.KT_1253_FEATURE_KEY, fromKt1253.reducer),
    EffectsModule.forFeature([Kt1253Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1253Facade, Kt1253Service],
})
export class Kt1253Module {}
