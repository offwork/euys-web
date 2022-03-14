import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';
import { Pfdm3101Effects } from './+state/pfdm-3101.effects';
import { Pfdm3101Facade } from './+state/pfdm-3101.facade';
import * as fromPfdm3101 from './+state/pfdm-3101.reducer';
import { Pfdm3101Component } from './container/pfdm-3101.component';
import { Pfdm3101Service } from './services/pfdm-3101.service';

const routes: Routes = [
  {
    path: '',
    component: Pfdm3101Component,
  },
];

@NgModule({
  declarations: [Pfdm3101Component],
  imports: [
    CommonModule,
    SharedUiModule,
    StoreModule.forFeature(
      fromPfdm3101.PFDM_3101_FEATURE_KEY,
      fromPfdm3101.reducer
    ),
    EffectsModule.forFeature([Pfdm3101Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Pfdm3101Facade, Pfdm3101Service, ConfirmationService],
})
export class Pfdm3101Module {}
