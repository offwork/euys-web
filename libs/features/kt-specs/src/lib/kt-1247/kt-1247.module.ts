import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1247Effects } from './+state/kt-1247.effects';
import { Kt1247Facade } from './+state/kt-1247.facade';
import * as fromKt1247 from './+state/kt-1247.reducer';
import { Kt1247Component } from './container/kt-1247.component';
import { Kt1247Service } from './services/kt-1247.service';

const routes: Routes = [{ path: '', component: Kt1247Component }];

@NgModule({
  declarations: [Kt1247Component],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromKt1247.KT_1247_FEATURE_KEY, fromKt1247.reducer),
    EffectsModule.forFeature([Kt1247Effects]),
    SharedUiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [Kt1247Facade, Kt1247Service],
})
export class Kt1247Module {}
