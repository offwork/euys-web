import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';
import { Pfdm3104Effects } from './+state/pfdm-3104.effects';
import { Pfdm3104Facade } from './+state/pfdm-3104.facade';
import * as fromPfdm3104 from './+state/pfdm-3104.reducer';
import { Pfdm3104Component } from './container/pfdm-3104.component';
import { Pfdm3104Service } from './services/pfdm-3104.service';

const routes: Routes = [
  {
    path: '',
    component: Pfdm3104Component,
  },
];

@NgModule({
  declarations: [Pfdm3104Component],
  imports: [
    CommonModule,
    SharedUiModule,
    StoreModule.forFeature(
      fromPfdm3104.PFDM_3104_FEATURE_KEY,
      fromPfdm3104.reducer
    ),
    EffectsModule.forFeature([Pfdm3104Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Pfdm3104Facade, Pfdm3104Service, ConfirmationService],
})
export class Pfdm3104Module {}
