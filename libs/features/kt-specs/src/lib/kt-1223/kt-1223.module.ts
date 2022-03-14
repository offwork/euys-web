import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kt1223Component } from './container/kt-1223.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKt1223 from './+state/kt-1223.reducer';
import { Kt1223Effects } from './+state/kt-1223.effects';
import { Kt1223Facade } from './+state/kt-1223.facade';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@euys/shared/ui';
import { RouterModule, Routes } from '@angular/router';
import { Kt1223Service } from './services/kt-1223.service';

const routes: Routes = [{ path: '', component: Kt1223Component }];

@NgModule({
  declarations: [Kt1223Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1223.KT_1223_FEATURE_KEY, fromKt1223.reducer),
    EffectsModule.forFeature([Kt1223Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1223Facade, Kt1223Service],
})
export class Kt1223Module {}
