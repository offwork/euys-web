import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { YillikUretimPlaniModule } from '../shared/yillik-uretim-plani/yillik-uretim-plani.module';
import { Up3004Effects } from './+state/up-3004.effects';
import { Up3004Facade } from './+state/up-3004.facade';
import * as fromUp3004 from './+state/up-3004.reducer';
import { Up3004Component } from './container/up-3004.component';
import { Up3004Service } from './services/up-3004.service';

const routes: Routes = [{ path: '', component: Up3004Component }];

@NgModule({
  declarations: [Up3004Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    YillikUretimPlaniModule,
    StoreModule.forFeature(fromUp3004.UP_3004_FEATURE_KEY, fromUp3004.reducer),
    EffectsModule.forFeature([Up3004Effects]),
  ],
  providers: [Up3004Service, Up3004Facade],
})
export class Up3004Module {}
