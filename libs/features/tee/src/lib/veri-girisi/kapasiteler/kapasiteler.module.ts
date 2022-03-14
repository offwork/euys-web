import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { KapasitelerEffects } from './+state/kapasiteler.effects';
import { KapasitelerFacade } from './+state/kapasiteler.facade';
import * as fromKapasiteler from './+state/kapasiteler.reducer';
import { KapasitelerGridComponent } from './container/components/kapasiteler-grid.component';
import { KapasitelerComponent } from './container/kapasiteler.component';
import { KapasitelerService } from './services/kapasiteler.service';

const routes: Routes = [{ path: '', component: KapasitelerComponent }];

@NgModule({
  declarations: [KapasitelerGridComponent, KapasitelerComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(
      fromKapasiteler.KAPASITELER_FEATURE_KEY,
      fromKapasiteler.reducer
    ),
    EffectsModule.forFeature([KapasitelerEffects]),
  ],
  providers: [KapasitelerService, KapasitelerFacade],
})
export class KapasitelerModule {}
