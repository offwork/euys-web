import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kk8103Component } from './container/kk-8103.component';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import * as fromKk8103 from './+state/kk-8103.reducer';
import { Kk8103Effects } from './+state/kk-8103.effects';
import { Kk8103Facade } from './+state/kk-8103.facade';
import { Kk8103Service } from './services/kk-8103.service';
import { SharedUiModule } from '@euys/shared/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnaVeriSharedModule } from '../shared/ana-veri/ana-veri-shared.module';
import { OperatorBilgilendirmeKayitComponent } from './components/operator-bilgilendirme-kayit/operator-bilgilendirme-kayit.component';

const routes: Routes = [{ path: '', component: Kk8103Component }];

@NgModule({
  declarations: [Kk8103Component, OperatorBilgilendirmeKayitComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiModule,
    AnaVeriSharedModule,
    StoreModule.forFeature(fromKk8103.KK_8103_FEATURE_KEY, fromKk8103.reducer),
    EffectsModule.forFeature([Kk8103Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kk8103Facade, Kk8103Service],
})
export class Kk8103Module {}
