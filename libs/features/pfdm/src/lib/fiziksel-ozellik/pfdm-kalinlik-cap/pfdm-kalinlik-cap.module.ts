import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfdmKalinlikCapComponent } from './container/pfdm-kalinlik-cap.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPfdmKalinlikCap from './+state/pfdm-kalinlik-cap.reducer';
import { PfdmKalinlikCapEffects } from './+state/pfdm-kalinlik-cap.effects';
import { PfdmKalinlikCapFacade } from './+state/pfdm-kalinlik-cap.facade';
import { SharedUiModule } from '@euys/shared/ui';
import { PfdmKalinlikCapService } from './services/pfdm-kalinlik-cap.service';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

const routes: Routes = [
  {
    path: '',
    component: PfdmKalinlikCapComponent,
  },
];

@NgModule({
  declarations: [PfdmKalinlikCapComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    StoreModule.forFeature(
      fromPfdmKalinlikCap.PFDM_KALINLIK_CAP_FEATURE_KEY,
      fromPfdmKalinlikCap.reducer
    ),
    EffectsModule.forFeature([PfdmKalinlikCapEffects]),
    RouterModule.forChild(routes),
  ],
  providers: [
    PfdmKalinlikCapFacade,
    PfdmKalinlikCapService,
    ConfirmationService,
  ],
})
export class PfdmKalinlikCapModule {}
