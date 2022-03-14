import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1246Component } from './container/kt-1246.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1246 from './+state/kt-1246.reducer';
import { Kt1246Effects } from './+state/kt-1246.effects';
import { Kt1246Facade } from './+state/kt-1246.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1246Service } from './services/kt-1246.service';

const routes: Routes = [{ path: '', component: Kt1246Component }];

@NgModule({
  declarations: [Kt1246Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1246.KT_1246_FEATURE_KEY, fromKt1246.reducer),
    EffectsModule.forFeature([Kt1246Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1246Facade, Kt1246Service],
})
export class Kt1246Module {}
