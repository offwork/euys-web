import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1207Component } from './container/kt-1207.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1207 from './+state/kt-1207.reducer';
import { Kt1207Effects } from './+state/kt-1207.effects';
import { Kt1207Facade } from './+state/kt-1207.facade';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Kt1207Service } from './services/kt-1207.service';

const routes: Routes = [{ path: '', component: Kt1207Component }];

@NgModule({
  declarations: [Kt1207Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1207.KT_1207_FEATURE_KEY, fromKt1207.reducer),
    EffectsModule.forFeature([Kt1207Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1207Facade, Kt1207Service],
})
export class Kt1207Module {}
