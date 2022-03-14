import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1210Effects } from './+state/kt-1210.effects';
import { Kt1210Facade } from './+state/kt-1210.facade';
import * as fromKt1210 from './+state/kt-1210.reducer';
import { Kt1210Component } from './container/kt-1210.component';
import { Kt1210Service } from './services/kt-1210.service';

const routes: Routes = [{ path: '', component: Kt1210Component }];

@NgModule({
  declarations: [Kt1210Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1210.KT_1210_FEATURE_KEY, fromKt1210.reducer),
    EffectsModule.forFeature([Kt1210Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1210Facade, Kt1210Service],
})
export class Kt1210Module {}
