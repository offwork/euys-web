import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Up3021Effects } from './+state/up-3021.effects';
import { Up3021Facade } from './+state/up-3021.facade';
import * as fromUp3021 from './+state/up-3021.reducer';
import { Up3021Component } from './container/up-3021.component';
import { Up3021Service } from './services/up-3021.service';

const routes: Routes = [{ path: '', component: Up3021Component }];

@NgModule({
  declarations: [Up3021Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedUiModule,
    StoreModule.forFeature(fromUp3021.UP_3001_FEATURE_KEY, fromUp3021.reducer),
    EffectsModule.forFeature([Up3021Effects]),
  ],
  providers: [Up3021Service, Up3021Facade],
})
export class Up3021Module {}
