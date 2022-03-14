import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kk8141Component } from './container/kk-8141.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKk8141 from './+state/kk-8141.reducer';
import { Kk8141Effects } from './+state/kk-8141.effects';
import { Kk8141Facade } from './+state/kk-8141.facade';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@euys/shared/ui';
import { Kk8141Service } from './services/kk-8141.service';
import { DialogService } from 'primeng/dynamicdialog';
import { YuzeyKusurKaydiListComponent } from './components/yuzey-kusur-kaydi-list/yuzey-kusur-kaydi-list.component';

const routes: Routes = [{ path: '', component: Kk8141Component }];

@NgModule({
  declarations: [Kk8141Component, YuzeyKusurKaydiListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiModule,
    StoreModule.forFeature(fromKk8141.KK_8141_FEATURE_KEY, fromKk8141.reducer),
    EffectsModule.forFeature([Kk8141Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kk8141Facade, Kk8141Service, DialogService],
})
export class Kk8141Module {}
