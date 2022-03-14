import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1205Component } from './container/kt-1205.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1205 from './+state/kt-1205.reducer';
import { Kt1205Effects } from './+state/kt-1205.effects';
import { Kt1205Facade } from './+state/kt-1205.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1205Service } from './services/kt-1205.service';

const routes: Routes = [{ path: '', component: Kt1205Component }];

@NgModule({
  declarations: [Kt1205Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1205.KT_1205_FEATURE_KEY, fromKt1205.reducer),
    EffectsModule.forFeature([Kt1205Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1205Facade, Kt1205Service],
})
export class Kt1205Module {}
