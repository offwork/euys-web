import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BazAnaBilgilerModule } from '../shared/baz-ana-bilgiler/baz-ana-bilgiler.module';
import { Up3001Effects } from './+state/up-3001.effects';
import { Up3001Facade } from './+state/up-3001.facade';
import * as fromUp3001 from './+state/up-3001.reducer';
import { Up3001Component } from './container/up-3001.component';
import { Up3001Service } from './services/up-3001.service';

const routes: Routes = [{ path: '', component: Up3001Component }];

@NgModule({
  declarations: [Up3001Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromUp3001.UP_3001_FEATURE_KEY, fromUp3001.reducer),
    EffectsModule.forFeature([Up3001Effects]),
    BazAnaBilgilerModule,
  ],
  providers: [Up3001Facade, Up3001Service],
})
export class Up3001Module {}
