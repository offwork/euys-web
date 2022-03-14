import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SogukTarihGecikmeAnaliziEffects } from './+state/soguk-tarih-gecikme-analizi.effects';
import { SogukTarihGecikmeAnaliziFacade } from './+state/soguk-tarih-gecikme-analizi.facade';
import * as fromSogukTarihGecikmeAnalizi from './+state/soguk-tarih-gecikme-analizi.reducer';
import { SogukTarihGecikmeAnaliziComponent } from './container/soguk-tarih-gecikme-analizi.component';
import { SogukTarihGecikmeAnaliziService } from './services/soguk-tarih-gecikme-analizi.service';

@NgModule({
  declarations: [SogukTarihGecikmeAnaliziComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: SogukTarihGecikmeAnaliziComponent }]),
    StoreModule.forFeature(
      fromSogukTarihGecikmeAnalizi.SOGUK_TARIH_GECIKME_ANALIZI_FEATURE_KEY,
      fromSogukTarihGecikmeAnalizi.reducer
    ),
    EffectsModule.forFeature([SogukTarihGecikmeAnaliziEffects]),
  ],
  providers: [SogukTarihGecikmeAnaliziService, SogukTarihGecikmeAnaliziFacade],
})
export class SogukTarihGecikmeAnaliziModule {}
