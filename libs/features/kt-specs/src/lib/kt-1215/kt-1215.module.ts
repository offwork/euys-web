import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1215Effects } from './+state/kt-1215.effects';
import { Kt1215Facade } from './+state/kt-1215.facade';
import * as fromKt1215 from './+state/kt-1215.reducer';
import { Kt1215Component } from './container/kt-1215.component';
import { Kt1215Service } from './services/kt-1215.service';

const routes: Routes = [{ path: '', component: Kt1215Component }];

@NgModule({
  declarations: [Kt1215Component],
  imports: [
    ReactiveFormsModule,
    SharedUiModule,
    CommonModule,
    StoreModule.forFeature(fromKt1215.KT_1215_FEATURE_KEY, fromKt1215.reducer),
    EffectsModule.forFeature([Kt1215Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1215Facade, Kt1215Service],
})
export class Kt1215Module {}
