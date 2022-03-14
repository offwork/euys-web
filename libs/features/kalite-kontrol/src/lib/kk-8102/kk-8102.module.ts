import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kk8102Component } from './container/kk-8102.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKk8102 from './+state/kk-8102.reducer';
import { Kk8102Effects } from './+state/kk-8102.effects';
import { Kk8102Facade } from './+state/kk-8102.facade';
import { Kk8102Service } from './services/kk-8102.service';
import { KusurKoduGoruntulemeComponent } from './components/kusur-kodu-goruntuleme/kusur-kodu-goruntuleme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@euys/shared/ui';

const routes: Routes = [{ path: '', component: Kk8102Component }];

@NgModule({
  declarations: [Kk8102Component, KusurKoduGoruntulemeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromKk8102.KK_8102_FEATURE_KEY, fromKk8102.reducer),
    EffectsModule.forFeature([Kk8102Effects]),
  ],
  providers: [Kk8102Facade, Kk8102Service],
})
export class Kk8102Module {}
