import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1224Component } from './container/kt-1224.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1224 from './+state/kt-1224.reducer';
import { Kt1224Effects } from './+state/kt-1224.effects';
import { Kt1224Facade } from './+state/kt-1224.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1224Service } from './services/kt-1224.service';

const routes: Routes = [{ path: '', component: Kt1224Component }];

@NgModule({
  declarations: [Kt1224Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1224.KT_1224_FEATURE_KEY, fromKt1224.reducer),
    EffectsModule.forFeature([Kt1224Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1224Facade, Kt1224Service],
})
export class Kt1224Module {}
