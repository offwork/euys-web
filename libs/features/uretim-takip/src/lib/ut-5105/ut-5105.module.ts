import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ut5105Component } from './container/ut-5105.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUt5105 from './+state/ut-5105.reducer';
import { Ut5105Effects } from './+state/ut-5105.effects';
import { Ut5105Facade } from './+state/ut-5105.facade';
import { SharedUiModule } from '@euys/shared/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ut5105Service } from './services/ut-5105.service';
import { Routes, RouterModule } from '@angular/router';
import { FilterOlcumTarihiPipe } from './pipes/filter-olcum-tarihi.pipe';

const routes: Routes = [{ path: '', component: Ut5105Component }];
@NgModule({
  declarations: [Ut5105Component, FilterOlcumTarihiPipe],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUt5105.UT_5105_FEATURE_KEY, fromUt5105.reducer),
    EffectsModule.forFeature([Ut5105Effects]),
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers: [Ut5105Facade, Ut5105Service],
})
export class Ut5105Module {}
