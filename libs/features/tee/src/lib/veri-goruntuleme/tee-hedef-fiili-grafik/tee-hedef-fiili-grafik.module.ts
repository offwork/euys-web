import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HedefFiiliGrafikEffects } from './+state/hedef-fiili-grafik.effects';
import { HedefFiiliGrafikFacade } from './+state/hedef-fiili-grafik.facade';
import * as fromHedefFiiliGrafik from './+state/hedef-fiili-grafik.reducer';
import { TeeHedefFiiliGrafikComponent } from './container/tee-hedef-fiili-grafik.component';
import { HedefFiiliGrafikService } from './services/hedef-fiili-grafik.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TeeHedefFiiliGrafikComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedUiModule,
    StoreModule.forFeature(
      fromHedefFiiliGrafik.HEDEF_FIILI_GRAFIK_FEATURE_KEY,
      fromHedefFiiliGrafik.reducer
    ),
    EffectsModule.forFeature([HedefFiiliGrafikEffects]),
  ],
  exports: [TeeHedefFiiliGrafikComponent],
  providers: [HedefFiiliGrafikFacade, HedefFiiliGrafikService],
})
export class TeeHedefFiiliGrafikModule {}
