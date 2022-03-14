import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1231Effects } from './+state/kt-1231.effects';
import { Kt1231Facade } from './+state/kt-1231.facade';
import * as fromKt1231 from './+state/kt-1231.reducer';
import { Kt1231Component } from './container/kt-1231.component';
import { Kt1231Service } from './services/kt-1231.service';

const routes: Routes = [{ path: '', component: Kt1231Component }];

@NgModule({
  declarations: [Kt1231Component],
  imports: [
    ReactiveFormsModule,
    SharedUiModule,
    CommonModule,
    StoreModule.forFeature(fromKt1231.KT_1231_FEATURE_KEY, fromKt1231.reducer),
    EffectsModule.forFeature([Kt1231Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1231Facade, Kt1231Service],
})
export class Kt1231Module {}
