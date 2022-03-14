import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1260Effects } from './+state/kt-1260.effects';
import { Kt1260Facade } from './+state/kt-1260.facade';
import * as fromKt1260 from './+state/kt-1260.reducer';
import { Kt1260Component } from './container/kt-1260.component';
import { Kt1260Service } from './services/kt-1260.service';

const routes: Routes = [{ path: '', component: Kt1260Component }];

@NgModule({
  declarations: [Kt1260Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromKt1260.KT_1260_FEATURE_KEY, fromKt1260.reducer),
    EffectsModule.forFeature([Kt1260Effects]),
  ],
  providers: [Kt1260Service, Kt1260Facade],
})
export class Kt1260Module {}
