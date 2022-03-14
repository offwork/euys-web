import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1206Effects } from './+state/kt-1206.effects';
import { Kt1206Facade } from './+state/kt-1206.facade';
import * as fromKt1206 from './+state/kt-1206.reducer';
import { Kt1206Component } from './container/kt-1206.component';
import { Kt1206Service } from './services/kt-1206.service';

const routes: Routes = [{ path: '', component: Kt1206Component }];

@NgModule({
  declarations: [Kt1206Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1206.KT_1206_FEATURE_KEY, fromKt1206.reducer),
    EffectsModule.forFeature([Kt1206Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1206Facade, Kt1206Service],
})
export class Kt1206Module {}
