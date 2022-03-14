import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1256Effects } from './+state/kt-1256.effects';
import { Kt1256Facade } from './+state/kt-1256.facade';
import * as fromKt1256 from './+state/kt-1256.reducer';
import { Kt1256Component } from './container/kt-1256.component';
import { Kt1256Service } from './services/kt-1256.service';

const routes: Routes = [{ path: '', component: Kt1256Component }];

@NgModule({
  declarations: [Kt1256Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1256.KT_1256_FEATURE_KEY, fromKt1256.reducer),
    EffectsModule.forFeature([Kt1256Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1256Facade, Kt1256Service],
})
export class Kt1256Module {}
