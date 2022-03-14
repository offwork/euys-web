import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1234Effects } from './+state/kt-1234.effects';
import { Kt1234Facade } from './+state/kt-1234.facade';
import * as fromKt1234 from './+state/kt-1234.reducer';
import { Kt1234Component } from './container/kt-1234.component';
import { Kt1234Service } from './services/kt-1234.service';

const routes: Routes = [{ path: '', component: Kt1234Component }];

@NgModule({
  declarations: [Kt1234Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1234.KT_1234_FEATURE_KEY, fromKt1234.reducer),
    EffectsModule.forFeature([Kt1234Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1234Facade, Kt1234Service],
})
export class Kt1234Module {}
