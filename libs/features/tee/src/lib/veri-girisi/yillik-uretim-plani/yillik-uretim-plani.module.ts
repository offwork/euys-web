import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { YillikUretimPlaniEffects } from './+state/yillik-uretim-plani.effects';
import { YillikUretimPlaniFacade } from './+state/yillik-uretim-plani.facade';
import * as fromYillikUretimPlani from './+state/yillik-uretim-plani.reducer';
import { YillikUretimPlaniComponent } from './container/yillik-uretim-plani.component';
import { YillikUretimPlaniService } from './services/yillik-uretim-plani.service';

@NgModule({
  declarations: [YillikUretimPlaniComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    TranslocoLocaleModule,
    RouterModule.forChild([{ path: '', component: YillikUretimPlaniComponent }]),
    StoreModule.forFeature(fromYillikUretimPlani.YILLIK_URETIM_PLANI_FEATURE_KEY, fromYillikUretimPlani.reducer),
    EffectsModule.forFeature([YillikUretimPlaniEffects]),
  ],
  providers: [YillikUretimPlaniService, YillikUretimPlaniFacade],
})
export class YillikUretimPlaniModule {}
