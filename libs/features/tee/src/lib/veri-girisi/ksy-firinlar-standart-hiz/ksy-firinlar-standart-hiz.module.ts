import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { KsyFirinlarStandartHizComponent } from './container/ksy-firinlar-standart-hiz.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKsyfStandartHatHizi from './+state/ksyf-standart-hat-hizi.reducer';
import { KsyfStandartHatHiziEffects } from './+state/ksyf-standart-hat-hizi.effects';
import { KsyfStandartHatHiziFacade } from './+state/ksyf-standart-hat-hizi.facade';
import { KsyfStandartHizService } from './services/ksyf-standart-hiz.service';
import { KsyFirinlarStandartHizGridComponent } from './container/components/ksy-firinlar-standart-hiz-grid.component';

const routes: Routes = [
  { path: '', component: KsyFirinlarStandartHizComponent },
];

@NgModule({
  declarations: [
    KsyFirinlarStandartHizGridComponent,
    KsyFirinlarStandartHizComponent,
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(
      fromKsyfStandartHatHizi.KSYF_STANDART_HAT_HIZI_FEATURE_KEY,
      fromKsyfStandartHatHizi.reducer
    ),
    EffectsModule.forFeature([KsyfStandartHatHiziEffects]),
  ],
  providers: [KsyfStandartHizService, KsyfStandartHatHiziFacade],
})
export class KsyFirinlarStandartHizModule {}
