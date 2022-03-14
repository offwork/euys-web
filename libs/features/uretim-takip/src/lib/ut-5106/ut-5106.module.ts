import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ut5106Component } from './container/ut-5106.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUt5106 from './+state/ut-5106.reducer';
import { Ut5106Effects } from './+state/ut-5106.effects';
import { Ut5106Facade } from './+state/ut-5106.facade';
import { SharedUiModule } from '@euys/shared/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ut5106Service } from './services/ut-5106.service';
import { Routes, RouterModule } from '@angular/router';
import { FilterVardiyaTarihiPipe } from './pipes/filter-vardiya-tarihi.pipe';

const routes: Routes = [{ path: '', component: Ut5106Component }];
@NgModule({
  declarations: [Ut5106Component, FilterVardiyaTarihiPipe],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUt5106.UT_5106_FEATURE_KEY, fromUt5106.reducer),
    EffectsModule.forFeature([Ut5106Effects]),
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers: [Ut5106Facade, Ut5106Service],
})
export class Ut5106Module {}
