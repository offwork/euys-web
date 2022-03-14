import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Up3244Effects } from './+state/up-3244.effects';
import { Up3244Facade } from './+state/up-3244.facade';
import * as fromUp3244 from './+state/up-3244.reducer';
import { Up3244Component } from './container/up-3244.component';
import { Up3244Service } from './services/up-3244.service';

const routes: Routes = [{ path: '', component: Up3244Component }];

@NgModule({
  declarations: [Up3244Component],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(fromUp3244.UP_3244_FEATURE_KEY, fromUp3244.reducer),
    EffectsModule.forFeature([Up3244Effects]),
  ],
  providers: [Up3244Service, Up3244Facade],
})
export class Up3244Module {}
