import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CuAylikGecikmeAnaliziEffects } from './+state/cu-aylik-gecikme-analizi.effects';
import { CuAylikGecikmeAnaliziFacade } from './+state/cu-aylik-gecikme-analizi.facade';
import * as fromCuAylikGecikmeAnalizi from './+state/cu-aylik-gecikme-analizi.reducer';
import { CuAylikGecikmeAnaliziComponent } from './container/cu-aylik-gecikme-analizi.component';
import { CuAylikGecikmeAnaliziService } from './services/cu-aylik-gecikme-analizi.service';

@NgModule({
  declarations: [CuAylikGecikmeAnaliziComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: CuAylikGecikmeAnaliziComponent }]),
    StoreModule.forFeature(
      fromCuAylikGecikmeAnalizi.CU_AYLIK_GECIKME_ANALIZI_FEATURE_KEY,
      fromCuAylikGecikmeAnalizi.reducer
    ),
    EffectsModule.forFeature([CuAylikGecikmeAnaliziEffects]),
  ],
  providers: [CuAylikGecikmeAnaliziService, CuAylikGecikmeAnaliziFacade],
})
export class CuAylikGecikmeAnaliziModule {}
