import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1201Component } from './container/kt-1201.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1201 from './+state/kt-1201.reducer';
import { Kt1201Effects } from './+state/kt-1201.effects';
import { Kt1201Facade } from './+state/kt-1201.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1201Service } from './services/kt-1201.service';

const routes: Routes = [{ path: '', component: Kt1201Component }];

@NgModule({
  declarations: [Kt1201Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1201.KT_1201_FEATURE_KEY, fromKt1201.reducer),
    EffectsModule.forFeature([Kt1201Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1201Facade, Kt1201Service],
})
export class Kt1201Module {}
