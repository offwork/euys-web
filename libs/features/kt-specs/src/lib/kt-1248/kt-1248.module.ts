import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1248Effects } from './+state/kt-1248.effects';
import { Kt1248Facade } from './+state/kt-1248.facade';
import * as fromKt1248 from './+state/kt-1248.reducer';
import { Kt1248Component } from './container/kt-1248.component';
import { Kt1248Service } from './services/kt-1248.service';

const routes: Routes = [{ path: '', component: Kt1248Component }];

@NgModule({
  declarations: [Kt1248Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1248.KT_1248_FEATURE_KEY, fromKt1248.reducer),
    EffectsModule.forFeature([Kt1248Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1248Facade, Kt1248Service],
})
export class Kt1248Module {}
