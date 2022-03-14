import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ut6114Component } from './container/ut-6114.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUt6114 from './+state/ut-6114.reducer';
import { Ut6114Effects } from './+state/ut-6114.effects';
import { Ut6114Facade } from './+state/ut-6114.facade';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: Ut6114Component }];

@NgModule({
  declarations: [Ut6114Component],
  imports: [
    CommonModule,
    SharedUiModule,
    StoreModule.forFeature(fromUt6114.UT_6114_FEATURE_KEY, fromUt6114.reducer),
    EffectsModule.forFeature([Ut6114Effects]),
    RouterModule.forChild(routes),
    AutoCompleteModule,
    FormsModule,
  ],
  providers: [Ut6114Facade],
})
export class Ut6114Module {}
