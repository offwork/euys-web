import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1219Component } from './container/kt-1219.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1219 from './+state/kt-1219.reducer';
import { Kt1219Effects } from './+state/kt-1219.effects';
import { Kt1219Facade } from './+state/kt-1219.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1219Service } from './services/kt-1219.service';

const routes: Routes = [{ path: '', component: Kt1219Component }];

@NgModule({
  declarations: [Kt1219Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1219.KT_1219_FEATURE_KEY, fromKt1219.reducer),
    EffectsModule.forFeature([Kt1219Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1219Facade, Kt1219Service],
})
export class Kt1219Module {}
