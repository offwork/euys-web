import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1243Component } from './container/kt-1243.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1243 from './+state/kt-1243.reducer';
import { Kt1243Effects } from './+state/kt-1243.effects';
import { Kt1243Facade } from './+state/kt-1243.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1243Service } from './services/kt-1243.service';

const routes: Routes = [{ path: '', component: Kt1243Component }];

@NgModule({
  declarations: [Kt1243Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1243.KT_1243_FEATURE_KEY, fromKt1243.reducer),
    EffectsModule.forFeature([Kt1243Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1243Facade, Kt1243Service],
})
export class Kt1243Module {}
