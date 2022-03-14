import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ut5102Component } from './container/ut-5102.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUt5102 from './+state/ut-5102.reducer';
import { Ut5102Effects } from './+state/ut-5102.effects';
import { Ut5102Facade } from './+state/ut-5102.facade';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: Ut5102Component }];

@NgModule({
  declarations: [Ut5102Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUt5102.UT_5102_FEATURE_KEY, fromUt5102.reducer),
    EffectsModule.forFeature([Ut5102Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Ut5102Facade],
})
export class Ut5102Module {}
