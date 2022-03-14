import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kk8116Component } from './container/kk-8116.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKk8116 from './+state/kk-8116.reducer';
import { Kk8116Effects } from './+state/kk-8116.effects';
import { Kk8116Facade } from './+state/kk-8116.facade';
import { Kk8116Service } from './services/kk-8116.service';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { FeaturesKaliteKontrolSharedModule } from '../shared/features-kalite-kontrol-shared.module';

const routes: Routes = [{ path: '', component: Kk8116Component }];

@NgModule({
  declarations: [Kk8116Component],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromKk8116.KK_8116_FEATURE_KEY, fromKk8116.reducer),
    EffectsModule.forFeature([Kk8116Effects]),
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    RouterModule.forChild(routes),
    SharedUiModule,
    FeaturesKaliteKontrolSharedModule,
  ],
  providers: [Kk8116Facade, Kk8116Service, DialogService, MessageService],
})
export class Kk8116Module {}
