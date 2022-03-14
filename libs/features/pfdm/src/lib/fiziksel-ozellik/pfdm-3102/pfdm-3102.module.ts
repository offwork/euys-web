import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';
import { Pfdm3102Effects } from './+state/pfdm-3102.effects';
import { Pfdm3102Facade } from './+state/pfdm-3102.facade';
import * as fromPfdm3102 from './+state/pfdm-3102.reducer';
import { Pfdm3102Component } from './container/pfdm-3102.component';
import { Pfdm3102Service } from './services/pfdm-3102.service';

const routes: Routes = [
  {
    path: '',
    component: Pfdm3102Component,
  },
];

@NgModule({
  declarations: [Pfdm3102Component],
  imports: [
    CommonModule,
    SharedUiModule,
    StoreModule.forFeature(
      fromPfdm3102.PFDM_3102_FEATURE_KEY,
      fromPfdm3102.reducer
    ),
    EffectsModule.forFeature([Pfdm3102Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Pfdm3102Facade, Pfdm3102Service, ConfirmationService],
})
export class Pfdm3102Module {}
