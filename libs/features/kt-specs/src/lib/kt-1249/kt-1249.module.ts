import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1249Effects } from './+state/kt-1249.effects';
import { Kt1249Facade } from './+state/kt-1249.facade';
import * as fromKt1249 from './+state/kt-1249.reducer';
import { Kt1249Component } from './container/kt-1249.component';
import { Kt1249Service } from './services/kt-1249.service';

const routes: Routes = [{ path: '', component: Kt1249Component }];

@NgModule({
  declarations: [Kt1249Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1249.KT_1249_FEATURE_KEY, fromKt1249.reducer),
    EffectsModule.forFeature([Kt1249Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1249Facade, Kt1249Service],
})
export class Kt1249Module {}
