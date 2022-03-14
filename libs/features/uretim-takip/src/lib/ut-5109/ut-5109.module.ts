import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ut5109Component } from './container/ut-5109.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUt5109 from './+state/ut-5109.reducer';
import { Ut5109Effects } from './+state/ut-5109.effects';
import { Ut5109Facade } from './+state/ut-5109.facade';
import { Routes, RouterModule } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { Ut5109Service } from './services/ut-5109.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterOlcumTarihiPipe } from './pipes/filter-olcum-tarihi.pipe';
import { ConfirmationService } from 'primeng/api';

const routes: Routes = [{ path: '', component: Ut5109Component }];

@NgModule({
  declarations: [Ut5109Component, FilterOlcumTarihiPipe],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUt5109.UT_5109_FEATURE_KEY, fromUt5109.reducer),
    EffectsModule.forFeature([Ut5109Effects]),
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers: [Ut5109Facade, Ut5109Service, ConfirmationService],
})
export class Ut5109Module {}
