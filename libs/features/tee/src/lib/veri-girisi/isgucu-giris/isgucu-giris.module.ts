import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IsgucleriEffects } from './+state/isgucleri.effects';
import { IsgucleriFacade } from './+state/isgucleri.facade';
import * as fromIsgucleri from './+state/isgucleri.reducer';
import {
  IsgucuGirisComponent,
  ManpowerGridInputComponent,
  ManpowerPipe,
  PlaceholderPipe,
} from './container';
import { IsgucuGirisService } from './services/isgucu-giris.service';

@NgModule({
  declarations: [
    ManpowerPipe,
    PlaceholderPipe,
    ManpowerGridInputComponent,
    IsgucuGirisComponent,
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    StoreModule.forFeature(
      fromIsgucleri.ISGUCLERI_FEATURE_KEY,
      fromIsgucleri.reducer
    ),
    EffectsModule.forFeature([IsgucleriEffects]),
    RouterModule.forChild([{ path: '', component: IsgucuGirisComponent }]),
  ],
  providers: [IsgucuGirisService, IsgucleriFacade],
})
export class IsgucuGirisModule {}
