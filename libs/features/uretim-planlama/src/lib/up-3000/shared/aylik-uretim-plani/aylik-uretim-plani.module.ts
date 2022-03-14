import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AylikUretimPlaniService } from './services/aylik-uretim-plani.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAylikUretimPlani from './+state/aylik-uretim-plani.reducer';
import { AylikUretimPlaniEffects } from './+state/aylik-uretim-plani.effects';
import { AylikUretimPlaniFacade } from './+state/aylik-uretim-plani.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromAylikUretimPlani.AYLIK_URETIM_PLANI_FEATURE_KEY,
      fromAylikUretimPlani.reducer
    ),
    EffectsModule.forFeature([AylikUretimPlaniEffects]),
  ],
  providers: [AylikUretimPlaniService, AylikUretimPlaniFacade],
})
export class AylikUretimPlaniModule {}
