import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ut5104Component } from './container/ut-5104.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUt5104 from './+state/ut-5104.reducer';
import { Ut5104Effects } from './+state/ut-5104.effects';
import { Ut5104Facade } from './+state/ut-5104.facade';
import { Routes, RouterModule } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: Ut5104Component }];

@NgModule({
  declarations: [Ut5104Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUt5104.UT_5104_FEATURE_KEY, fromUt5104.reducer),
    EffectsModule.forFeature([Ut5104Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Ut5104Facade],
})
export class Ut5104Module {}
