import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LineSpeedsEffects } from './+state/line-speeds.effects';
import { LineSpeedsFacade } from './+state/line-speeds.facade';
import * as fromLineSpeeds from './+state/line-speeds.reducer';
import { LineSpeedsComponent } from './container/line-speeds.component';
import { LineSppedsService } from './services/line-sppeds.service';
import { ProductLinesService } from './services/product-lines.service';

const routes: Routes = [{ path: '', component: LineSpeedsComponent }];

@NgModule({
  declarations: [LineSpeedsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedUiModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(
      fromLineSpeeds.LINESPEEDS_FEATURE_KEY,
      fromLineSpeeds.reducer
    ),
    EffectsModule.forFeature([LineSpeedsEffects]),
  ],
  providers: [LineSppedsService, ProductLinesService, LineSpeedsFacade],
})
export class LineSpeedsModule {}
