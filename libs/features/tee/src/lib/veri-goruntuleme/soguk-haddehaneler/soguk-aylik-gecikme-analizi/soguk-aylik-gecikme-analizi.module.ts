import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SogukAylikGecikmeAnaliziEffects } from './+state/soguk-aylik-gecikme-analizi.effects';
import { SogukAylikGecikmeAnaliziFacade } from './+state/soguk-aylik-gecikme-analizi.facade';
import * as fromSogukAylikGecikmeAnalizi from './+state/soguk-aylik-gecikme-analizi.reducer';
import { SogukAylikGecikmeAnaliziComponent } from './container/soguk-aylik-gecikme-analizi.component';
import { SogukAylikGecikmeAnaliziService } from './services/soguk-aylik-gecikme-analizi.service';

@NgModule({
  declarations: [SogukAylikGecikmeAnaliziComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: SogukAylikGecikmeAnaliziComponent }]),
    StoreModule.forFeature(
      fromSogukAylikGecikmeAnalizi.SOGUK_AYLIK_GECIKME_ANALIZI_FEATURE_KEY,
      fromSogukAylikGecikmeAnalizi.reducer
    ),
    EffectsModule.forFeature([SogukAylikGecikmeAnaliziEffects]),
  ],
  providers: [SogukAylikGecikmeAnaliziService, SogukAylikGecikmeAnaliziFacade],
})
export class SogukAylikGecikmeAnaliziModule {}
