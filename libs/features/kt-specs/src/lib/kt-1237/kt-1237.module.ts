import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1237Component } from './container/kt-1237.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1237 from './+state/kt-1237.reducer';
import { Kt1237Effects } from './+state/kt-1237.effects';
import { Kt1237Facade } from './+state/kt-1237.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1237Service } from './services/kt-1237.service';

const routes: Routes = [{ path: '', component: Kt1237Component }];



@NgModule({
  declarations: [Kt1237Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1237.KT_1237_FEATURE_KEY, fromKt1237.reducer),
    EffectsModule.forFeature([Kt1237Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1237Facade, Kt1237Service],
})
export class Kt1237Module {}
