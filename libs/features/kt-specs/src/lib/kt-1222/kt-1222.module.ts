import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1222Effects } from './+state/kt-1222.effects';
import { Kt1222Facade } from './+state/kt-1222.facade';
import * as fromKt1222 from './+state/kt-1222.reducer';
import { Kt1222Component } from './container/kt-1222.component';
import { Kt1222Service } from './services/kt-1222.service';

const routes: Routes = [{ path: '', component: Kt1222Component }];

@NgModule({
  declarations: [Kt1222Component],
  imports: [
    ReactiveFormsModule,
    SharedUiModule,
    CommonModule,
    StoreModule.forFeature(fromKt1222.KT_1222_FEATURE_KEY, fromKt1222.reducer),
    EffectsModule.forFeature([Kt1222Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1222Facade, Kt1222Service],
})
export class Kt1222Module {}
