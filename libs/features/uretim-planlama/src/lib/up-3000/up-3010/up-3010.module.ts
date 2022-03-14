import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Up3010Component } from './container/up-3010.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import * as fromUp3010 from './+state/up-3010.reducer';
import { Up3010Effects } from './+state/up-3010.effects';
import { Up3010Facade } from './+state/up-3010.facade';
import { AylikUretimPlaniModule } from '../shared/aylik-uretim-plani/aylik-uretim-plani.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: Up3010Component }];


@NgModule({
  declarations: [Up3010Component],
  imports: [
    CommonModule,
    AylikUretimPlaniModule,
    StoreModule.forFeature(fromUp3010.UP_3010_FEATURE_KEY, fromUp3010.reducer),
    EffectsModule.forFeature([Up3010Effects]),
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedUiModule,

  ],
  providers: [Up3010Facade],
})
export class Up3010Module {}
