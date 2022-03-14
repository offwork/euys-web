import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CuTarihGecikmeAnaliziEffects } from './+state/cu-tarih-gecikme-analizi.effects';
import { CuTarihGecikmeAnaliziFacade } from './+state/cu-tarih-gecikme-analizi.facade';
import * as fromCuTarihGecikmeAnalizi from './+state/cu-tarih-gecikme-analizi.reducer';
import { CuTarihGecikmeAnaliziComponent } from './container/cu-tarih-gecikme-analizi.component';
import { CuTarihGecikmeAnaliziService } from './services/cu-tarih-gecikme-analizi.service';

@NgModule({
  declarations: [CuTarihGecikmeAnaliziComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: CuTarihGecikmeAnaliziComponent }]),
    StoreModule.forFeature(
      fromCuTarihGecikmeAnalizi.CU_TARIH_GECIKME_ANALIZI_FEATURE_KEY,
      fromCuTarihGecikmeAnalizi.reducer
    ),
    EffectsModule.forFeature([CuTarihGecikmeAnaliziEffects]),
  ],
  providers: [CuTarihGecikmeAnaliziService, CuTarihGecikmeAnaliziFacade],
})
export class CuTarihGecikmeAnaliziModule {}
