import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1240Component } from './container/kt-1240.component';
import { StoreModule } from '@ngrx/store';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1240 from './+state/kt-1240.reducer';
import { Kt1240Effects } from './+state/kt-1240.effects';
import { Kt1240Facade } from './+state/kt-1240.facade';
import { RouterModule, Routes } from '@angular/router';
import { Kt1240Service } from '../kt-1240/services/kt-1240.service';

const routes: Routes = [{ path: '', component: Kt1240Component }];

@NgModule({
  declarations: [Kt1240Component],
  imports: [
    SharedUiModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature(fromKt1240.KT_1240_FEATURE_KEY, fromKt1240.reducer),
    EffectsModule.forFeature([Kt1240Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1240Facade, Kt1240Service],
})
export class Kt1240Module {}
