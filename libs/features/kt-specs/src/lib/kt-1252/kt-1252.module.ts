import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1252Component } from './container/kt-1252.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1252 from './+state/kt-1252.reducer';
import { Kt1252Effects } from './+state/kt-1252.effects';
import { Kt1252Facade } from './+state/kt-1252.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Kt1252Service } from './services/kt-1252.service';

const routes: Routes = [{ path: '', component: Kt1252Component }];

@NgModule({
  declarations: [Kt1252Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1252.KT_1252_FEATURE_KEY, fromKt1252.reducer),
    EffectsModule.forFeature([Kt1252Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1252Facade, Kt1252Service],
})
export class Kt1252Module {}
