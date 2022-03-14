import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1204Component } from './container/kt-1204.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1204 from './+state/kt-1204.reducer';
import { Kt1204Effects } from './+state/kt-1204.effects';
import { Kt1204Facade } from './+state/kt-1204.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1204Service } from './services/kt-1204.service';

const routes: Routes = [{ path: '', component: Kt1204Component }];

@NgModule({
  declarations: [Kt1204Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1204.KT_1204_FEATURE_KEY, fromKt1204.reducer),
    EffectsModule.forFeature([Kt1204Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1204Facade, Kt1204Service],
})
export class Kt1204Module {}
