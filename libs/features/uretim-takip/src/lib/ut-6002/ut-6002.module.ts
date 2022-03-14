import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ut6002Component } from './container/ut-6002.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUt6002 from './+state/ut-6002.reducer';
import { Ut6002Effects } from './+state/ut-6002.effects';
import { Ut6002Facade } from './+state/ut-6002.facade';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ut6002Service } from './services/ut-6002.service';
import { FilterOlusturmaTarihiPipe } from './pipes/filter-olusturma-tarihi.pipe';
import { MultiSelectModule } from 'primeng/multiselect';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

const routes: Routes = [{ path: '', component: Ut6002Component }];

@NgModule({
  declarations: [Ut6002Component, FilterOlusturmaTarihiPipe],
  imports: [
    CommonModule,
    SharedUiModule,
    MultiSelectModule,
    ReactiveFormsModule,
    ToastModule,
    StoreModule.forFeature(fromUt6002.UT_6002_FEATURE_KEY, fromUt6002.reducer),
    EffectsModule.forFeature([Ut6002Effects]),
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers: [Ut6002Facade, Ut6002Service, MessageService],
})
export class Ut6002Module {}
