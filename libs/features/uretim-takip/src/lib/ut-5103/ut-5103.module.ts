import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ut5103Component } from './container/ut-5103.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUt5103 from './+state/ut-5103.reducer';
import { Ut5103Effects } from './+state/ut-5103.effects';
import { Ut5103Facade } from './+state/ut-5103.facade';
import { SharedUiModule } from '@euys/shared/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ut5103Service } from './services/ut-5103.service';
import { Routes, RouterModule } from '@angular/router';
import { FilterOlcumTarihiPipe } from './pipes/filter-olcum-tarihi.pipe';

const routes: Routes = [{ path: '', component: Ut5103Component }];
@NgModule({
  declarations: [Ut5103Component, FilterOlcumTarihiPipe],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUt5103.UT_5103_FEATURE_KEY, fromUt5103.reducer),
    EffectsModule.forFeature([Ut5103Effects]),
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers: [Ut5103Facade, Ut5103Service],
})
export class Ut5103Module {}
