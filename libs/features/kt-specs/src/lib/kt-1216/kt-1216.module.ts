import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1216Component } from './container/kt-1216.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1216 from './+state/kt-1216.reducer';
import { Kt1216Effects } from './+state/kt-1216.effects';
import { Kt1216Facade } from './+state/kt-1216.facade';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@euys/shared/ui';
import { Kt1216Service } from './services/kt-1216.service';

const routes: Routes = [{ path: '', component: Kt1216Component }];

@NgModule({
  declarations: [Kt1216Component],
  imports: [
    ReactiveFormsModule,
    SharedUiModule,
    CommonModule,
    StoreModule.forFeature(fromKt1216.KT_1216_FEATURE_KEY, fromKt1216.reducer),
    EffectsModule.forFeature([Kt1216Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1216Facade, Kt1216Service],
})
export class Kt1216Module {}
