import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuAylikGecikmeAnaliziComponent } from './container/du-aylik-gecikme-analizi.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDuAylikGecikmeAnalizi from './+state/du-aylik-gecikme-analizi.reducer';
import { DuAylikGecikmeAnaliziEffects } from './+state/du-aylik-gecikme-analizi.effects';
import { DuAylikGecikmeAnaliziFacade } from './+state/du-aylik-gecikme-analizi.facade';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { DuAylikGecikmeAnaliziService } from './services/du-aylik-gecikme-analizi.service';

@NgModule({
  declarations: [DuAylikGecikmeAnaliziComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: DuAylikGecikmeAnaliziComponent }]),
    StoreModule.forFeature(
      fromDuAylikGecikmeAnalizi.DU_AYLIK_GECIKME_ANALIZI_FEATURE_KEY,
      fromDuAylikGecikmeAnalizi.reducer
    ),
    EffectsModule.forFeature([DuAylikGecikmeAnaliziEffects]),
  ],
  providers: [DuAylikGecikmeAnaliziService, DuAylikGecikmeAnaliziFacade],
})
export class DuAylikGecikmeAnaliziModule {}
