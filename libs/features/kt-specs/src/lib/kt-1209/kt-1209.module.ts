import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1209Component } from './container/kt-1209.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1209 from './+state/kt-1209.reducer';
import { Kt1209Effects } from './+state/kt-1209.effects';
import { Kt1209Facade } from './+state/kt-1209.facade';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Kt1209Service } from './services/kt-1209.service';

const routes: Routes = [{ path: '', component: Kt1209Component }];


@NgModule({
  declarations: [Kt1209Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1209.KT_1209_FEATURE_KEY, fromKt1209.reducer),
    EffectsModule.forFeature([Kt1209Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1209Facade, Kt1209Service],
})
export class Kt1209Module {}
