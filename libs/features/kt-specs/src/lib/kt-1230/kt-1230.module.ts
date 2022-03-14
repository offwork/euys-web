import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1230Effects } from './+state/kt-1230.effects';
import { Kt1230Facade } from './+state/kt-1230.facade';
import * as fromKt1230 from './+state/kt-1230.reducer';
import { Kt1230Component } from './container/kt-1230.component';
import { Kt1230Service } from './services/kt-1230.service';

const routes: Routes = [{ path: '', component: Kt1230Component }];

@NgModule({
  declarations: [Kt1230Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1230.KT_1230_FEATURE_KEY, fromKt1230.reducer),
    EffectsModule.forFeature([Kt1230Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1230Facade, Kt1230Service],
})
export class Kt1230Module {}
