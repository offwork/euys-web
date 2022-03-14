import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kk8140Component } from './container/kk-8140.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKk8140 from './+state/kk-8140.reducer';
import { Kk8140Effects } from './+state/kk-8140.effects';
import { Kk8140Facade } from './+state/kk-8140.facade';
import { Kk8140Service } from './services/kk-8140.service';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { FeaturesKaliteKontrolSharedModule } from '../shared/features-kalite-kontrol-shared.module';

const routes: Routes = [{ path: '', component: Kk8140Component }];

@NgModule({
  declarations: [Kk8140Component],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromKk8140.KK_8140_FEATURE_KEY, fromKk8140.reducer),
    EffectsModule.forFeature([Kk8140Effects]),
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    RouterModule.forChild(routes),
    SharedUiModule,
    FeaturesKaliteKontrolSharedModule,
  ],
  providers: [Kk8140Facade, Kk8140Service, DialogService, MessageService],
})
export class Kk8140Module {}
