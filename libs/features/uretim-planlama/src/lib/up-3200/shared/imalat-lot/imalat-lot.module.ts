import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ImalatLotEffects } from './+state/imalat-lot.effects';
import { ImalatLotFacade } from './+state/imalat-lot.facade';
import * as fromImalatLot from './+state/imalat-lot.reducer';
import { ImalatLotCriteriaComponent } from './components/imalat-lot-criteria/imalat-lot-criteria.component';
import { ImalatLotNoComponent } from './components/imalat-lot-no/imalat-lot-no.component';

@NgModule({
  declarations: [ImalatLotNoComponent, ImalatLotCriteriaComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromImalatLot.IMALAT_LOT_FEATURE_KEY,
      fromImalatLot.reducer
    ),
    EffectsModule.forFeature([ImalatLotEffects]),
  ],
  exports: [ImalatLotNoComponent, ImalatLotCriteriaComponent],
  providers: [ImalatLotFacade],
})
export class ImalatLotModule {}
