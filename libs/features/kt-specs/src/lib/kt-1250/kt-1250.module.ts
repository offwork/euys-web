import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Kt1250Component } from './container/kt-1250.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1250 from './+state/kt-1250.reducer';
import { Kt1250Effects } from './+state/kt-1250.effects';
import { Kt1250Facade } from './+state/kt-1250.facade';
import { Kt1250Service } from './services/kt-1250.service';
const routes: Routes = [{ path: '', component: Kt1250Component }];
@NgModule({
  declarations: [Kt1250Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromKt1250.KT_1250_FEATURE_KEY, fromKt1250.reducer),
    EffectsModule.forFeature([Kt1250Effects]),
  ],
  providers: [Kt1250Facade, Kt1250Service],
})
export class Kt1250Module {}
