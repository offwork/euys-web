import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ut6113Component } from './container/ut-6113.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUt6113 from './+state/ut-6113.reducer';
import { Ut6113Effects } from './+state/ut-6113.effects';
import { Ut6113Facade } from './+state/ut-6113.facade';
import { SharedUiModule } from '@euys/shared/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';

const routes: Routes = [{ path: '', component: Ut6113Component }];

@NgModule({
  declarations: [Ut6113Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromUt6113.UT_6113_FEATURE_KEY, fromUt6113.reducer),
    EffectsModule.forFeature([Ut6113Effects]),
    AutoCompleteModule,
  ],
  providers: [Ut6113Facade],
})
export class Ut6113Module {}
