import * as fromKk8117 from './+state/kk-8117.reducer';
import { CommonModule } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Kk8117Component } from './container/kk-8117.component';
import { Kk8117Effects } from './+state/kk-8117.effects';
import { Kk8117Facade } from './+state/kk-8117.facade';
import { Kk8117Service } from './services/kk-8117.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { StoreModule } from '@ngrx/store';
import { YuzeyKusurKaydiListComponent } from './components/yuzey-kusur-kaydi-list/yuzey-kusur-kaydi-list.component';

const routes: Routes = [{ path: '', component: Kk8117Component }];

@NgModule({
  declarations: [
    Kk8117Component,
    YuzeyKusurKaydiListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiModule,
    StoreModule.forFeature(fromKk8117.KK_8117_FEATURE_KEY, fromKk8117.reducer),
    EffectsModule.forFeature([Kk8117Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kk8117Facade, Kk8117Service, DialogService],
})
export class Kk8117Module {}
