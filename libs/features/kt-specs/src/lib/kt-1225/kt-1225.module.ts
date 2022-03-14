import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1225Component } from './container/kt-1225.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1225 from './+state/kt-1225.reducer';
import { Kt1225Effects } from './+state/kt-1225.effects';
import { Kt1225Facade } from './+state/kt-1225.facade';
import { RouterModule, Routes } from '@angular/router';
import { Kt1225Service } from './services/kt-1225.service';
import { SharedUiModule } from '@euys/shared/ui';

const routes: Routes = [{ path: '', component: Kt1225Component }];
@NgModule({
  declarations: [Kt1225Component],
  imports: [
    CommonModule,
    SharedUiModule,
    StoreModule.forFeature(fromKt1225.KT_1225_FEATURE_KEY, fromKt1225.reducer),
    EffectsModule.forFeature([Kt1225Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1225Facade, Kt1225Service],
})
export class Kt1225Module {}
