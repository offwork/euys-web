import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ut5108Component } from './container/ut-5108.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUt5108 from './+state/ut-5108.reducer';
import { Ut5108Effects } from './+state/ut-5108.effects';
import { Ut5108Facade } from './+state/ut-5108.facade';
import { SharedUiModule } from '@euys/shared/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ut5108Service } from './services/ut-5108.service';
import { Routes, RouterModule } from '@angular/router';
import { FilterVardiyaTarihiPipe } from './pipes/filter-vardiya-tarihi.pipe';

const routes: Routes = [{ path: '', component: Ut5108Component }];
@NgModule({
  declarations: [Ut5108Component, FilterVardiyaTarihiPipe],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUt5108.UT_5108_FEATURE_KEY, fromUt5108.reducer),
    EffectsModule.forFeature([Ut5108Effects]),
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers: [Ut5108Facade, Ut5108Service],
})
export class Ut5108Module {}
