import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Up3030Effects } from './+state/up-3030.effects';
import { Up3030Facade } from './+state/up-3030.facade';
import * as fromUp3030 from './+state/up-3030.reducer';
import { Up3030Component } from './container/up-3030.component';

const routes: Routes = [{ path: '', component: Up3030Component }];

@NgModule({
  declarations: [Up3030Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedUiModule,
    StoreModule.forFeature(fromUp3030.UP_3001_FEATURE_KEY, fromUp3030.reducer),
    EffectsModule.forFeature([Up3030Effects]),
  ],
  providers: [Up3030Facade],
})
export class Up3030Module {}
