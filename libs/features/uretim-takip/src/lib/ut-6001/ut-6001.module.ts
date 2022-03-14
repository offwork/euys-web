import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ut6001Component } from './container/ut-6001.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUt6001 from './+state/ut-6001.reducer';
import { Ut6001Effects } from './+state/ut-6001.effects';
import { Ut6001Facade } from './+state/ut-6001.facade';
import { SharedUiModule } from '@euys/shared/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Ut6001Service } from './services/ut-6001.service';
import { FilterIslemTarihiPipe } from './pipes/filter-islem-tarihi.pipe';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';

const routes: Routes = [{ path: '', component: Ut6001Component }];

@NgModule({
  declarations: [Ut6001Component, FilterIslemTarihiPipe],
  imports: [
    CommonModule,
    SharedUiModule,
    MultiSelectModule,
    ReactiveFormsModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    InputTextareaModule,
    StoreModule.forFeature(fromUt6001.UT_6001_FEATURE_KEY, fromUt6001.reducer),
    EffectsModule.forFeature([Ut6001Effects]),
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers: [Ut6001Facade, Ut6001Service, MessageService, ConfirmationService],
})
export class Ut6001Module {}
