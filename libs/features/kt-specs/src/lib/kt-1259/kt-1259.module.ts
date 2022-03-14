import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { Kt1259Component } from './container/kt-1259.component';
import { Kt1259Service } from './services/kt-1259.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1259 from './+state/kt-1259.reducer';
import { Kt1259Effects } from './+state/kt-1259.effects';
import { Kt1259Facade } from './+state/kt-1259.facade';

const routes: Routes = [{ path: '', component: Kt1259Component }];

@NgModule({
  declarations: [Kt1259Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1259.KT_1259_FEATURE_KEY, fromKt1259.reducer),
    EffectsModule.forFeature([Kt1259Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1259Facade, Kt1259Service],
})
export class Kt1259Module {}
