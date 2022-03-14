import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1202Component } from './container/kt-1202.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1202 from './+state/kt-1202.reducer';
import { Kt1202Effects } from './+state/kt-1202.effects';
import { Kt1202Facade } from './+state/kt-1202.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1202Service } from './services/kt-1202.service';

const routes: Routes = [{ path: '', component: Kt1202Component }];

@NgModule({
  declarations: [Kt1202Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1202.KT_1202_FEATURE_KEY, fromKt1202.reducer),
    EffectsModule.forFeature([Kt1202Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1202Facade, Kt1202Service],
})
export class Kt1202Module {}
