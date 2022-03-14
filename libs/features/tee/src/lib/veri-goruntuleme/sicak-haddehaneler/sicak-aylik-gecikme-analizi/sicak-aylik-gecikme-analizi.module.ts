import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SicakAylikGecikmeAnaliziEffects } from './+state/sicak-aylik-gecikme-analizi.effects';
import { SicakAylikGecikmeAnaliziFacade } from './+state/sicak-aylik-gecikme-analizi.facade';
import * as fromSicakAylikGecikmeAnalizi from './+state/sicak-aylik-gecikme-analizi.reducer';
import { SicakAylikGecikmeAnaliziComponent } from './container/sicak-aylik-gecikme-analizi.component';
import { SicakAylikGecikmeAnaliziService } from './services/sicak-aylik-gecikme-analizi.service';

@NgModule({
  declarations: [SicakAylikGecikmeAnaliziComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: SicakAylikGecikmeAnaliziComponent }]),
    StoreModule.forFeature(
      fromSicakAylikGecikmeAnalizi.SICAK_AYLIK_GECIKME_ANALIZI_FEATURE_KEY,
      fromSicakAylikGecikmeAnalizi.reducer
    ),
    EffectsModule.forFeature([SicakAylikGecikmeAnaliziEffects]),
  ],
  providers: [SicakAylikGecikmeAnaliziService, SicakAylikGecikmeAnaliziFacade],
})
export class SicakAylikGecikmeAnaliziModule {}
