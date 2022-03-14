import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1218Effects } from './+state/kt-1218.effects';
import { Kt1218Facade } from './+state/kt-1218.facade';
import * as fromKt1218 from './+state/kt-1218.reducer';
import { Kt1218Component } from './container/kt1218.component';
import { Kt1218Service } from './services/kt-1218.service';

const routes: Routes = [{ path: '', component: Kt1218Component }];

@NgModule({
  declarations: [Kt1218Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1218.KT_1218_FEATURE_KEY, fromKt1218.reducer),
    EffectsModule.forFeature([Kt1218Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1218Service, Kt1218Facade],
})
export class Kt1218Module {}
