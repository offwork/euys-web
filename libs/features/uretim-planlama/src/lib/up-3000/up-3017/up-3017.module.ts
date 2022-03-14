import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Up3017Effects } from './+state/up-3017.effects';
import { Up3017Facade } from './+state/up-3017.facade';
import * as fromUp3017 from './+state/up-3017.reducer';
import { Up3017Component } from './container/up-3017.component';
import { Up3017Service } from './services/up-3017.service';

const routes: Routes = [{ path: '', component: Up3017Component }];

@NgModule({
  declarations: [Up3017Component],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(fromUp3017.UP_3017_FEATURE_KEY, fromUp3017.reducer),
    EffectsModule.forFeature([Up3017Effects]),
  ],
  providers: [Up3017Service, Up3017Facade],
})
export class Up3017Module {}
