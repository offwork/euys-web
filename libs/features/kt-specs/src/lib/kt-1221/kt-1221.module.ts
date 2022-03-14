import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1221Effects } from './+state/kt-1221.effects';
import { Kt1221Facade } from './+state/kt-1221.facade';
import * as fromKt1221 from './+state/kt-1221.reducer';
import { Kt1221Component } from './container/kt-1221.component';
import { Kt1221Service } from './services/kt-1221.service';

const routes: Routes = [{ path: '', component: Kt1221Component }];

@NgModule({
  declarations: [Kt1221Component],
  imports: [
    ReactiveFormsModule,
    SharedUiModule,
    CommonModule,
    StoreModule.forFeature(fromKt1221.KT_1221_FEATURE_KEY, fromKt1221.reducer),
    EffectsModule.forFeature([Kt1221Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1221Facade, Kt1221Service],
})
export class Kt1221Module {}
