import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { KatsayiGrisEffects } from './+state/katsayi-giris.effects';
import { KatsayiGirisFacade } from './+state/katsayi-giris.facade';
import * as fromCoefficientInput from './+state/katsayi-giris.reducer';
import { KatsayiGridComponent } from './container/components/katsayi-grid.component';
import { KatsayiGirisiComponent } from './container/katsayi-girisi.component';
import { KatsayiGirisService } from './services/katsayi-giris.service';

const routes: Routes = [{ path: '', component: KatsayiGirisiComponent }];

@NgModule({
  declarations: [KatsayiGridComponent, KatsayiGirisiComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    TranslocoLocaleModule,
    SharedUiModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(
      fromCoefficientInput.COEFFICIENT_INPUT_FEATURE_KEY,
      fromCoefficientInput.reducer
    ),
    EffectsModule.forFeature([KatsayiGrisEffects]),
  ],
  providers: [KatsayiGirisFacade, KatsayiGirisService],
})
export class KatsayiGirisModule {}
