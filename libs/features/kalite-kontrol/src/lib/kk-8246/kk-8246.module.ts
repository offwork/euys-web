import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kk8246Component } from './container/kk-8246.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { Kk8246Effects } from './+state/kk-8246.effects';
import { Kk8246Facade } from './+state/kk-8246.facade';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@euys/shared/ui';
import { Kk8246Service } from './services/kk-8246.service';
import { BagimsizNumuneGoruntulemeComponent } from './components/bagimsiz-numune-goruntuleme.component';
import * as fromKk8246 from './+state/kk-8246.reducer';
import { AsitlemeModule } from '../shared/asitleme/asitleme.module';
const routes: Routes = [{ path: '', component: Kk8246Component }];

@NgModule({
  declarations: [Kk8246Component, BagimsizNumuneGoruntulemeComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([Kk8246Effects]),
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    RouterModule.forChild(routes),
    SharedUiModule,
    StoreModule.forFeature(fromKk8246.KK_8246_FEATURE_KEY, fromKk8246.reducer),
    AsitlemeModule,
  ],
  providers: [Kk8246Facade, Kk8246Service, DialogService],
})
export class Kk8246Module {}
