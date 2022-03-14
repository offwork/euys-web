import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kk8101Component } from './container/kk-8101.component';
import { RouterModule, Routes } from '@angular/router';
import { Kk8101Service } from './services/kk-8101.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKk8101 from './+state/kk-8101.reducer';
import { Kk8101Effects } from './+state/kk-8101.effects';
import { Kk8101Facade } from './+state/kk-8101.facade';
import { KusurKoduKayitComponent } from './components/kusur-kodu-kayit/kusur-kodu-kayit.component';
import { SharedUiModule } from '@euys/shared/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnaVeriSharedModule } from '../shared/ana-veri/ana-veri-shared.module';

const routes: Routes = [{ path: '', component: Kk8101Component }];

@NgModule({
  declarations: [Kk8101Component, KusurKoduKayitComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiModule,
    AnaVeriSharedModule,
    StoreModule.forFeature(fromKk8101.KK_8101_FEATURE_KEY, fromKk8101.reducer),
    EffectsModule.forFeature([Kk8101Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kk8101Facade, Kk8101Service],
})
export class Kk8101Module {}
