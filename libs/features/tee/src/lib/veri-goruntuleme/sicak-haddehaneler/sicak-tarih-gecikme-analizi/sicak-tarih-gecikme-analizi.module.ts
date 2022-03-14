import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SicakTarihGecikmeAnaliziEffects } from './+state/sicak-tarih-gecikme-analizi.effects';
import { SicakTarihGecikmeAnaliziFacade } from './+state/sicak-tarih-gecikme-analizi.facade';
import * as fromSicakTarihGecikmeAnalizi from './+state/sicak-tarih-gecikme-analizi.reducer';
import { SicakTarihGecikmeAnaliziComponent } from './container/sicak-tarih-gecikme-analizi.component';
import { SicakTarihGecikmeAnaliziService } from './services/sicak-tarih-gecikme-analizi.service';

@NgModule({
  declarations: [SicakTarihGecikmeAnaliziComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: SicakTarihGecikmeAnaliziComponent }]),
    StoreModule.forFeature(
      fromSicakTarihGecikmeAnalizi.SICAK_TARIH_GECIKME_ANALIZI_FEATURE_KEY,
      fromSicakTarihGecikmeAnalizi.reducer
    ),
    EffectsModule.forFeature([SicakTarihGecikmeAnaliziEffects]),
  ],
  providers: [SicakTarihGecikmeAnaliziService, SicakTarihGecikmeAnaliziFacade],
})
export class SicakTarihGecikmeAnaliziModule {}
