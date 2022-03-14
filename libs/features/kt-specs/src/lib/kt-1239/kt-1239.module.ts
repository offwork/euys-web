import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1239Effects } from './+state/kt-1239.effects';
import { Kt1239Facade } from './+state/kt-1239.facade';
import * as fromKt1239 from './+state/kt-1239.reducer';
import { Kt1239Component } from './container/kt-1239.component';
import { Kt1239Service } from './services/kt-1239.service';

const routes: Routes = [{ path: '', component: Kt1239Component }];

@NgModule({
  declarations: [Kt1239Component],
  imports: [
    SharedUiModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature(fromKt1239.KT_1239_FEATURE_KEY, fromKt1239.reducer),
    EffectsModule.forFeature([Kt1239Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1239Facade, Kt1239Service],
})
export class Kt1239Module {}
