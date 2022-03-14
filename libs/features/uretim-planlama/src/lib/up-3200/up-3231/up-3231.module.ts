import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ImalatLotModule } from '../shared/imalat-lot/imalat-lot.module';
import { Up3231Effects } from './+state/up-3231.effects';
import { Up3231Facade } from './+state/up-3231.facade';
import * as fromUp3231 from './+state/up-3231.reducer';
import { Up3231Component } from './container/up-3231.component';
import { Up3231Service } from './services/up-3231.service';

const routes: Routes = [{ path: '', component: Up3231Component }];

@NgModule({
  declarations: [Up3231Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ImalatLotModule,
    StoreModule.forFeature(fromUp3231.UP_3231_FEATURE_KEY, fromUp3231.reducer),
    EffectsModule.forFeature([Up3231Effects]),
  ],
  providers: [Up3231Service, Up3231Facade],
})
export class Up3231Module {}
