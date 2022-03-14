import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1220Component } from './container/kt-1220.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1220 from './+state/kt-1220.reducer';
import { Kt1220Effects } from './+state/kt-1220.effects';
import { Kt1220Facade } from './+state/kt-1220.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1220Service } from './services/kt-1220.service';

const routes: Routes = [{ path: '', component: Kt1220Component }];

@NgModule({
  declarations: [Kt1220Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1220.KT_1220_FEATURE_KEY, fromKt1220.reducer),
    EffectsModule.forFeature([Kt1220Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1220Facade, Kt1220Service],
})
export class Kt1220Module {}
