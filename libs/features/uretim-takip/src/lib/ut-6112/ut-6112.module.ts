import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ut6112Component} from './container/ut-6112.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromUt6112 from './+state/ut-6112.reducer';
import {Ut6112Effects} from './+state/ut-6112.effects';
import {Ut6112Facade} from './+state/ut-6112.facade';
import {SharedUiModule} from "@euys/shared/ui";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{path: '', component: Ut6112Component}];

@NgModule({
  declarations: [Ut6112Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUt6112.UT_6112_FEATURE_KEY, fromUt6112.reducer),
    EffectsModule.forFeature([Ut6112Effects]),
    RouterModule.forChild(routes)
  ],
  providers: [Ut6112Facade],
})
export class Ut6112Module {
}
