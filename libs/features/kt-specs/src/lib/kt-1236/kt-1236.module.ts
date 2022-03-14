import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1236Effects } from './+state/kt-1236.effects';
import { Kt1236Facade } from './+state/kt-1236.facade';
import * as fromKt1236 from './+state/kt-1236.reducer';
import { Kt1236Component } from './container/kt-1236.component';
import { Kt1236Service } from './services/kt-1236.service';

const routes: Routes = [{ path: '', component: Kt1236Component }];

@NgModule({
  declarations: [Kt1236Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1236.KT_1236_FEATURE_KEY, fromKt1236.reducer),
    EffectsModule.forFeature([Kt1236Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1236Facade, Kt1236Service],
})
export class Kt1236Module {}
