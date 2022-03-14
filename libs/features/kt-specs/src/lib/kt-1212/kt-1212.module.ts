import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedUiModule } from '@euys/shared/ui';
import { Kt1212Effects } from './+state/kt-1212.effects';
import { Kt1212Facade } from './+state/kt-1212.facade';
import * as fromKt1212 from './+state/kt-1212.reducer';
import { Kt1212Component } from './container/kt-1212.component';
import { Kt1212Service } from './services/kt-1212.service';

const routes: Routes = [{ path: '', component: Kt1212Component }];

@NgModule({
  declarations: [Kt1212Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1212.KT_1212_FEATURE_KEY, fromKt1212.reducer),
    EffectsModule.forFeature([Kt1212Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1212Facade, Kt1212Service],
})
export class Kt1212Module {}
