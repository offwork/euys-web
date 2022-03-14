import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1238Component } from './container/kt-1238.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1238 from './+state/kt-1238.reducer';
import { Kt1238Effects } from './+state/kt-1238.effects';
import { Kt1238Facade } from './+state/kt-1238.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1238Service } from './services/kt-1238.service';

const routes: Routes = [{ path: '', component: Kt1238Component }];

@NgModule({
  declarations: [Kt1238Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1238.KT_1238_FEATURE_KEY, fromKt1238.reducer),
    EffectsModule.forFeature([Kt1238Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1238Facade, Kt1238Service],
})
export class Kt1238Module {}
