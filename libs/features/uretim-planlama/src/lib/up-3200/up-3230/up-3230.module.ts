import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ImalatLotModule } from '../shared/imalat-lot/imalat-lot.module';
import { Up3230Effects } from './+state/up-3230.effects';
import { Up3230Facade } from './+state/up-3230.facade';
import * as fromUp3230 from './+state/up-3230.reducer';
import { Up3230Component } from './container/up-3230.component';
import { Up3230Service } from './services/up-3230.service';

const routes: Routes = [{ path: '', component: Up3230Component }];

@NgModule({
  declarations: [Up3230Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ImalatLotModule,
    StoreModule.forFeature(fromUp3230.UP_3230_FEATURE_KEY, fromUp3230.reducer),
    EffectsModule.forFeature([Up3230Effects]),
  ],
  providers: [Up3230Facade, Up3230Service],
})
export class Up3230Module {}
