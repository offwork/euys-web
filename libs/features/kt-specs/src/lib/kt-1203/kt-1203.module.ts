import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1203Component } from './container/kt1203.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1203 from './+state/kt-1203.reducer';
import { Kt1203Effects } from './+state/kt-1203.effects';
import { Kt1203Facade } from './+state/kt-1203.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1203Service } from './services/kt-1203.service';

const routes: Routes = [{ path: '', component: Kt1203Component }];

@NgModule({
  declarations: [Kt1203Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1203.KT_1203_FEATURE_KEY, fromKt1203.reducer),
    EffectsModule.forFeature([Kt1203Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1203Facade, Kt1203Service],
})
export class Kt1203Module {}
