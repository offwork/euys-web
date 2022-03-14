import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1233Effects } from './+state/kt-1233.effects';
import { Kt1233Facade } from './+state/kt-1233.facade';
import * as fromKt1233 from './+state/kt-1233.reducer';
import { Kt1233Component } from './container/kt-1233.component';
import { Kt1233Service } from './services/kt-1233.service';

const routes: Routes = [{ path: '', component: Kt1233Component }];
@NgModule({
  declarations: [Kt1233Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1233.KT_1233_FEATURE_KEY, fromKt1233.reducer),
    EffectsModule.forFeature([Kt1233Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1233Facade, Kt1233Service],
})
export class Kt1233Module {}
