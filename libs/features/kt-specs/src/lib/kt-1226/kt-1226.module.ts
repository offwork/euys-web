import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1226Component } from './container/kt-1226.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1226 from './+state/kt-1226.reducer';
import { Kt1226Effects } from './+state/kt-1226.effects';
import { Kt1226Facade } from './+state/kt-1226.facade';
import { Kt1226Service } from './services/kt-1226.service';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: Kt1226Component }];

@NgModule({
  declarations: [Kt1226Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1226.KT_1226_FEATURE_KEY, fromKt1226.reducer),
    EffectsModule.forFeature([Kt1226Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1226Facade, Kt1226Service],
})
export class Kt1226Module {}
