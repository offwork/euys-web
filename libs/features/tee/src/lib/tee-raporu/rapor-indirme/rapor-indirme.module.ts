import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '@euys/shared/ui';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RaporIndirmeComponent } from './container/rapor-indirme.component';
import * as fromRaporIndirme from './+state/rapor-indirme.reducer';
import { RaporIndirmeEffects } from './+state/rapor-indirme.effects';
import { RaporIndirmeFacade } from './+state/rapor-indirme.facade';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';

@NgModule({
  declarations: [RaporIndirmeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoLocaleModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: RaporIndirmeComponent }]),
    StoreModule.forFeature(
      fromRaporIndirme.RAPOR_INDIRME_FEATURE_KEY,
      fromRaporIndirme.reducer
    ),
    EffectsModule.forFeature([RaporIndirmeEffects]),
  ],
  providers: [RaporIndirmeFacade],
})
export class RaporIndirmeModule {}
