import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BazAnaBilgilerModule } from '../shared/baz-ana-bilgiler/baz-ana-bilgiler.module';
import { YillikUretimPlaniModule } from '../shared/yillik-uretim-plani/yillik-uretim-plani.module';
import { Up3002Effects } from './+state/up-3002.effects';
import { Up3002Facade } from './+state/up-3002.facade';
import * as fromUp3002 from './+state/up-3002.reducer';
import { Up3002Component } from './container/up-3002.component';
import { Up3002Service } from './services/up-3002.service';

const routes: Routes = [{ path: '', component: Up3002Component }];

@NgModule({
  declarations: [Up3002Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    BazAnaBilgilerModule,
    StoreModule.forFeature(fromUp3002.UP_3002_FEATURE_KEY, fromUp3002.reducer),
    EffectsModule.forFeature([Up3002Effects]),
    YillikUretimPlaniModule,
  ],
  providers: [Up3002Service, Up3002Facade],
})
export class Up3002Module {}
