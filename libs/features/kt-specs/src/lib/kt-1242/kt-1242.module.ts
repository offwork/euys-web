import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1242Component } from './container/kt-1242.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1242 from './+state/kt-1242.reducer';
import { Kt1242Effects } from './+state/kt-1242.effects';
import { Kt1242Facade } from './+state/kt-1242.facade';
import { Kt1242Service } from '../kt-1242/services/kt-1242.service';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: Kt1242Component }];

@NgModule({
  declarations: [Kt1242Component],
  imports: [
    SharedUiModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature(fromKt1242.KT_1242_FEATURE_KEY, fromKt1242.reducer),
    EffectsModule.forFeature([Kt1242Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1242Facade,Kt1242Service],
})
export class Kt1242Module {}
