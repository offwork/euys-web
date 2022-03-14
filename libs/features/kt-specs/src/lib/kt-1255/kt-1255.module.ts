import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1255Component } from './container/kt-1255.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1255 from './+state/kt-1255.reducer';
import { Kt1255Effects } from './+state/kt-1255.effects';
import { Kt1255Facade } from './+state/kt-1255.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1255Service } from './services/kt-1255.service';

const routes: Routes = [{ path: '', component: Kt1255Component }];

@NgModule({
  declarations: [Kt1255Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1255.KT_1255_FEATURE_KEY, fromKt1255.reducer),
    EffectsModule.forFeature([Kt1255Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1255Facade, Kt1255Service],
})
export class Kt1255Module {}
