import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';
import { Up3016Effects } from './+state/up-3016.effects';
import { Up3016Facade } from './+state/up-3016.facade';
import * as fromUp3016 from './+state/up-3016.reducer';
import { Up3016Component } from './container/up-3016.component';
import { Up3016Service } from './services/up-3016.service';

const routes: Routes = [{ path: '', component: Up3016Component }];

@NgModule({
  declarations: [Up3016Component],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(fromUp3016.UP_3016_FEATURE_KEY, fromUp3016.reducer),
    EffectsModule.forFeature([Up3016Effects]),
  ],
  providers: [Up3016Service, Up3016Facade, ConfirmationService],
})
export class Up3016Module {}
