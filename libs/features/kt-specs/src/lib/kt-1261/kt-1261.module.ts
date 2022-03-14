import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1261Effects } from './+state/kt-1261.effects';
import { Kt1261Facade } from './+state/kt-1261.facade';
import * as fromKt1261 from './+state/kt-1261.reducer';
import { Kt1261Component } from './container/kt-1261.component';
import { Kt1261Service } from './services/kt-1261.service';

const routes: Routes = [{ path: '', component: Kt1261Component }];

@NgModule({
  declarations: [Kt1261Component],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromKt1261.KT_1261_FEATURE_KEY, fromKt1261.reducer),
    EffectsModule.forFeature([Kt1261Effects]),
  ],
  providers: [Kt1261Facade, Kt1261Service],
})
export class Kt1261Module {}
