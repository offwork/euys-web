import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1257Component } from './container/kt-1257.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1257 from './+state/kt-1257.reducer';
import { Kt1257Effects } from './+state/kt-1257.effects';
import { Kt1257Facade } from './+state/kt-1257.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1257Service } from './services/kt-1257.service';

const routes: Routes = [{ path: '', component: Kt1257Component }];

@NgModule({
  declarations: [Kt1257Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1257.KT_1257_FEATURE_KEY, fromKt1257.reducer),
    EffectsModule.forFeature([Kt1257Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1257Facade, Kt1257Service],
})
export class Kt1257Module {}
