import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1213Component } from './container/kt-1213.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1213 from './+state/kt-1213.reducer';
import { Kt1213Effects } from './+state/kt-1213.effects';
import { Kt1213Facade } from './+state/kt-1213.facade';
import { Kt1213Service } from './services/kt-1213.service';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: Kt1213Component }];

@NgModule({
  declarations: [Kt1213Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1213.KT_1213_FEATURE_KEY, fromKt1213.reducer),
    EffectsModule.forFeature([Kt1213Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1213Facade, Kt1213Service],
})
export class Kt1213Module {}
