import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BazAnaBilgilerEffects } from './+state/baz-ana-bilgiler.effects';
import { BazAnaBilgilerFacade } from './+state/baz-ana-bilgiler.facade';
import * as fromBazAnaBilgiler from './+state/baz-ana-bilgiler.reducer';
import { BazAnaBilgilerService } from './services/baz-ana-bilgiler.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromBazAnaBilgiler.BAZ_ANA_BILGILER_FEATURE_KEY,
      fromBazAnaBilgiler.reducer
    ),
    EffectsModule.forFeature([BazAnaBilgilerEffects]),
  ],
  providers: [BazAnaBilgilerFacade, BazAnaBilgilerService],
})
export class BazAnaBilgilerModule {}
