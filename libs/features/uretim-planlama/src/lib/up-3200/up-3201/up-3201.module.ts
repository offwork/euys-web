import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Up3201Component } from './container/up-3201.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { Up3201Service } from './services/up-3201.service';
import { DialogModule } from 'primeng/dialog';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUp3201 from './+state/up-3201.reducer';
import { Up3201Effects } from './+state/up-3201.effects';
import { Up3201Facade } from './+state/up-3201.facade';

const routes: Routes = [{ path: '', component: Up3201Component }];

@NgModule({
  declarations: [Up3201Component],
  imports: [
    CommonModule,
    SharedUiModule,
    DialogModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(fromUp3201.UP_3201_FEATURE_KEY, fromUp3201.reducer),
    EffectsModule.forFeature([Up3201Effects]),
  ],
  providers: [Up3201Service, Up3201Facade],
})
export class Up3201Module {}
