import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Ut5101Effects } from './+state/ut-5101.effects';
import { Ut5101Facade } from './+state/ut-5101.facade';
import * as fromUt5101 from './+state/ut-5101.reducer';
import { FilterCinkoLapaPipe } from './container/filter-uretim-tarihi.pipe';
import { Ut5101Component } from './container/ut5101.component';
import { Ut5101Service } from './services/ut-5101.service';

const routes: Routes = [{ path: '', component: Ut5101Component }];

@NgModule({
  declarations: [Ut5101Component, FilterCinkoLapaPipe],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUt5101.UT_5101_FEATURE_KEY, fromUt5101.reducer),
    EffectsModule.forFeature([Ut5101Effects]),
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers: [Ut5101Facade, Ut5101Service],
})
export class Ut5101Module {}
