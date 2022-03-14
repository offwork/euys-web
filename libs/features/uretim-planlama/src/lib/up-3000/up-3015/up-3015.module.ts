import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Up3015Effects } from './+state/up-3015.effects';
import { Up3015Facade } from './+state/up-3015.facade';
import * as fromUp3015 from './+state/up-3015.reducer';
import { Up3015Component } from './container/up-3015.component';
import { Up3015Service } from './services/up-3015.service';

const routes: Routes = [{ path: '', component: Up3015Component }];

@NgModule({
  declarations: [Up3015Component],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(fromUp3015.UP_3015_FEATURE_KEY, fromUp3015.reducer),
    EffectsModule.forFeature([Up3015Effects]),
  ],
  providers: [Up3015Service, Up3015Facade],
})
export class Up3015Module {}
