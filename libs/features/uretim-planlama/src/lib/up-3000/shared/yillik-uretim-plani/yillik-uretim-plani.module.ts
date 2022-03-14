import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { YillikUretimPlaniEffects } from './+state/yillik-uretim-plani.effects';
import { YillikUretimPlaniFacade } from './+state/yillik-uretim-plani.facade';
import * as fromYillikUretimPlani from './+state/yillik-uretim-plani.reducer';
import { HatDuruslarHedeflerComponent } from './components/hat-duruslar-hedefler/hat-duruslar-hedefler.component';
import { KapasiteHedeflerComponent } from './components/kapasite-hedefler/kapasite-hedefler.component';
import { RumuzHedeflerComponent } from './components/rumuz-hedefler/rumuz-hedefler.component';
import { UretimHedeflerComponent } from './components/uretim-hedefler/uretim-hedefler.component';
import { UrunHedeflerComponent } from './components/urun-hedefler/urun-hedefler.component';
import { YupOzetComponent } from './components/yup-ozet/yup-ozet.component';
import { YillikUretimPlaniComponent } from './container/yillik-uretim-plani.component';
import { YillikUretimPlaniService } from './services/yillik-uretim-plani.service';

@NgModule({
  declarations: [
    YillikUretimPlaniComponent,
    UrunHedeflerComponent,
    YupOzetComponent,
    HatDuruslarHedeflerComponent,
    KapasiteHedeflerComponent,
    RumuzHedeflerComponent,
    UretimHedeflerComponent,
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromYillikUretimPlani.YILLIK_URETIM_PLANI_FEATURE_KEY,
      fromYillikUretimPlani.reducer
    ),
    EffectsModule.forFeature([YillikUretimPlaniEffects]),
  ],
  exports: [YillikUretimPlaniComponent, HatDuruslarHedeflerComponent],
  providers: [YillikUretimPlaniService, YillikUretimPlaniFacade],
})
export class YillikUretimPlaniModule {}
