import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';
import { Pfdm3103Effects } from './+state/pfdm-3103.effects';
import { Pfdm3103Facade } from './+state/pfdm-3103.facade';
import * as fromPfdm3103 from './+state/pfdm-3103.reducer';
import { Pfdm3103Component } from './container/pfdm-3103.component';
import { Pfdm3103Service } from './services/pfdm-3103.service';

const routes: Routes = [
  {
    path: '',
    component: Pfdm3103Component,
  },
];

@NgModule({
  declarations: [Pfdm3103Component],
  imports: [
    CommonModule,
    SharedUiModule,
    StoreModule.forFeature(
      fromPfdm3103.PFDM_3103_FEATURE_KEY,
      fromPfdm3103.reducer
    ),
    EffectsModule.forFeature([Pfdm3103Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Pfdm3103Facade, Pfdm3103Service, ConfirmationService],
})
export class Pfdm3103Module {}
