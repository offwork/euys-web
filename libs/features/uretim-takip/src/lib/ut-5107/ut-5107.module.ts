import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ut5107Component } from './container/ut-5107.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUt5107 from './+state/ut-5107.reducer';
import { Ut5107Effects } from './+state/ut-5107.effects';
import { Ut5107Facade } from './+state/ut-5107.facade';
import { SharedUiModule } from '@euys/shared/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ut5107Service } from './services/ut-5107.service';
import { Routes, RouterModule } from '@angular/router';
import { FilterVardiyaTarihiPipe } from './pipes/filter-vardiya-tarihi.pipe';

const routes: Routes = [{ path: '', component: Ut5107Component }];
@NgModule({
  declarations: [Ut5107Component, FilterVardiyaTarihiPipe],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUt5107.UT_5107_FEATURE_KEY, fromUt5107.reducer),
    EffectsModule.forFeature([Ut5107Effects]),
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers: [Ut5107Facade, Ut5107Service],
})
export class Ut5107Module {}
