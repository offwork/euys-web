import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1211Effects } from './+state/kt-1211.effects';
import { Kt1211Facade } from './+state/kt-1211.facade';
import * as fromKt1211 from './+state/kt-1211.reducer';
import { Kt1211Component } from './container/kt-1211.component';
import { Kt1211Service } from './services/kt-1211.service';

const routes: Routes = [{ path: '', component: Kt1211Component }];

@NgModule({
  declarations: [Kt1211Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1211.KT_1211_FEATURE_KEY, fromKt1211.reducer),
    EffectsModule.forFeature([Kt1211Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1211Facade, Kt1211Service],
})
export class Kt1211Module {}
