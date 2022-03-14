import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BazAnaBilgilerModule } from '../shared/baz-ana-bilgiler/baz-ana-bilgiler.module';
import { Up3003Effects } from './+state/up-3003.effects';
import { Up3003Facade } from './+state/up-3003.facade';
import * as fromUp3003 from './+state/up-3003.reducer';
import { Up3003Component } from './container/up-3003.component';
import { Up3003Service } from './services/up-3003.service';

const routes: Routes = [{ path: '', component: Up3003Component }];

@NgModule({
  declarations: [Up3003Component],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromUp3003.UP_3003_FEATURE_KEY, fromUp3003.reducer),
    EffectsModule.forFeature([Up3003Effects]),
    BazAnaBilgilerModule,
  ],
  providers: [Up3003Facade, Up3003Service],
})
export class Up3003Module {}
