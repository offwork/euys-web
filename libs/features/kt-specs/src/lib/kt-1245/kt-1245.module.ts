import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1245Component } from './container/kt-1245.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1245 from './+state/kt-1245.reducer';
import { Kt1245Effects } from './+state/kt-1245.effects';
import { Kt1245Facade } from './+state/kt-1245.facade';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Kt1245Service } from './services/kt-1245.service';

const routes: Routes = [{ path: '', component: Kt1245Component }];
@NgModule({
  declarations: [Kt1245Component],
  imports: [
    SharedUiModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature(fromKt1245.KT_1245_FEATURE_KEY, fromKt1245.reducer),
    EffectsModule.forFeature([Kt1245Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1245Facade, Kt1245Service],
})
export class Kt1245Module {}
