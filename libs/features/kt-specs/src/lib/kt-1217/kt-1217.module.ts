import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1217Component } from './container/kt1217.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1217 from './+state/kt-1217.reducer';
import { Kt1217Effects } from './+state/kt-1217.effects';
import { Kt1217Facade } from './+state/kt-1217.facade';
import { Kt1217Service } from './services/kt-1217.service';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@euys/shared/ui';

const routes: Routes = [{ path: '', component: Kt1217Component }];

@NgModule({
  declarations: [Kt1217Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1217.KT_1217_FEATURE_KEY, fromKt1217.reducer),
    EffectsModule.forFeature([Kt1217Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1217Service, Kt1217Facade],
})
export class Kt1217Module {}
