import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1344Effects } from './+state/kt-1344.effects';
import { Kt1344Facade } from './+state/kt-1344.facade';
import * as fromKt1344 from './+state/kt-1344.reducer';
import { SaveOrUpdateFormComponent } from './component/save-or-update-form/save-or-update-form.component';
import { ViewingListComponent } from './component/viewing-list/viewing-list.component';
import { Kt1344Component } from './container/kt-1344.component';
import { Kt1344Service } from './services/kt-1344.service';

const routes: Routes = [{ path: '', component: Kt1344Component }];

@NgModule({
  declarations: [
    Kt1344Component,
    ViewingListComponent,
    SaveOrUpdateFormComponent,
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromKt1344.KT_1344_FEATURE_KEY, fromKt1344.reducer),
    EffectsModule.forFeature([Kt1344Effects]),
  ],
  providers: [Kt1344Service, Kt1344Facade],
})
export class Kt1344Module {}
