import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1254Component } from './container/kt-1254.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1254 from './+state/kt-1254.reducer';
import { Kt1254Effects } from './+state/kt-1254.effects';
import { Kt1254Facade } from './+state/kt-1254.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1254Service } from './services/kt-1254.service';

const routes: Routes = [{ path: '', component: Kt1254Component }];

@NgModule({
  declarations: [Kt1254Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1254.KT_1254_FEATURE_KEY, fromKt1254.reducer),
    EffectsModule.forFeature([Kt1254Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1254Facade, Kt1254Service],
})
export class Kt1254Module {}
