import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DuTarihGecikmeAnaliziEffects } from './+state/du-tarih-gecikme-analizi.effects';
import { DuTarihGecikmeAnaliziFacade } from './+state/du-tarih-gecikme-analizi.facade';
import * as fromDuTarihGecikmeAnalizi from './+state/du-tarih-gecikme-analizi.reducer';
import { DuTarihGecikmeAnaliziComponent } from './container/du-tarih-gecikme-analizi.component';
import { DuTarihGecikmeAnaliziService } from './services/du-tarih-gecikme-analizi.service';

@NgModule({
  declarations: [DuTarihGecikmeAnaliziComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: DuTarihGecikmeAnaliziComponent }]),
    StoreModule.forFeature(
      fromDuTarihGecikmeAnalizi.DU_TARIH_GECIKME_ANALIZI_FEATURE_KEY,
      fromDuTarihGecikmeAnalizi.reducer
    ),
    EffectsModule.forFeature([DuTarihGecikmeAnaliziEffects]),
  ],
  providers: [DuTarihGecikmeAnaliziService, DuTarihGecikmeAnaliziFacade],
})
export class DuTarihGecikmeAnaliziModule {}
