import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';
import { Up3020Effects } from './+state/up-3020.effects';
import { Up3020Facade } from './+state/up-3020.facade';
import * as fromUp3020 from './+state/up-3020.reducer';
import { Up3020Component } from './container/up-3020.component';
import { Up3020Service } from './services/up-3020.service';

const routes: Routes = [{ path: '', component: Up3020Component }];

@NgModule({
  declarations: [Up3020Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedUiModule,
    StoreModule.forFeature(fromUp3020.UP_3020_FEATURE_KEY, fromUp3020.reducer),
    EffectsModule.forFeature([Up3020Effects]),
  ],
  providers: [Up3020Service, Up3020Facade, ConfirmationService],
})
export class Up3020Module {}
