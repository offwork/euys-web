import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { YillikUretimPlaniModule } from '../shared/yillik-uretim-plani/yillik-uretim-plani.module';
import { Up3005Effects } from './+state/up-3005.effects';
import { Up3005Facade } from './+state/up-3005.facade';
import * as fromUp3005 from './+state/up-3005.reducer';
import { Up3005Component } from './container/up-3005.component';
import { Up3005Service } from './services/up-3005.service';

const routes: Routes = [{ path: '', component: Up3005Component }];

@NgModule({
  declarations: [Up3005Component],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild(routes),
    YillikUretimPlaniModule,
    StoreModule.forFeature(fromUp3005.UP_3005_FEATURE_KEY, fromUp3005.reducer),
    EffectsModule.forFeature([Up3005Effects]),
  ],
  providers: [Up3005Service, Up3005Facade],
})
export class Up3005Module {}
