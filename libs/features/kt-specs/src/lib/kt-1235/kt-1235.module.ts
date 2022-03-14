import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1235Component } from './container/kt-1235.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1235 from './+state/kt-1235.reducer';
import { Kt1235Effects } from './+state/kt-1235.effects';
import { Kt1235Facade } from './+state/kt-1235.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1235Service } from './services/kt-1235.service';

const routes: Routes = [{ path: '', component: Kt1235Component }];

@NgModule({
  declarations: [Kt1235Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1235.KT_1235_FEATURE_KEY, fromKt1235.reducer),
    EffectsModule.forFeature([Kt1235Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1235Facade, Kt1235Service],
})
export class Kt1235Module {}
