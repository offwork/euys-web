import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HedeflerEffects } from './+state/hedefler.effects';
import { HedeflerFacade } from './+state/hedefler.facade';
import * as fromHedefler from './+state/hedefler.reducer';
import { HedeflerGridComponent } from './container/components/hedefler-grid.component';
import { HedeflerComponent } from './container/hedefler.component';
import { HedeflerService } from './services/hedefler.service';

const routes: Routes = [{ path: '', component: HedeflerComponent }];

@NgModule({
  declarations: [HedeflerComponent, HedeflerGridComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(
      fromHedefler.HEDEFLER_FEATURE_KEY,
      fromHedefler.reducer
    ),
    EffectsModule.forFeature([HedeflerEffects]),
  ],
  providers: [HedeflerService, HedeflerFacade],
})
export class HedeflerModule {}
