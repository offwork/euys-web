import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1232Component } from './container/kt-1232.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1232 from './+state/kt-1232.reducer';
import { Kt1232Effects } from './+state/kt-1232.effects';
import { Kt1232Facade } from './+state/kt-1232.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1232Service } from './services/kt-1232.service';

const routes: Routes = [{ path: '', component: Kt1232Component }];

@NgModule({
  declarations: [Kt1232Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1232.KT_1232_FEATURE_KEY, fromKt1232.reducer),
    EffectsModule.forFeature([Kt1232Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1232Facade, Kt1232Service],
})
export class Kt1232Module {}
