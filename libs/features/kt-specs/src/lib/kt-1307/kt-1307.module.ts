import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Kt1307Effects } from './+state/kt-1307.effects';
import { Kt1307Facade } from './+state/kt-1307.facade';
import * as fromKt1307 from './+state/kt-1307.reducer';
import { SaveOrUpdateFormComponent } from './components/save-or-update-form/save-or-update-form.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { Kt1307Component } from './container/kt-1307.component';
import { Kt1307Service } from './services/kt-1307.service';

const routes: Routes = [{ path: '', component: Kt1307Component }];

@NgModule({
  declarations: [
    Kt1307Component,
    SaveOrUpdateFormComponent,
    ViewingListComponent,
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromKt1307.KT_1307_FEATURE_KEY, fromKt1307.reducer),
    EffectsModule.forFeature([Kt1307Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kt1307Facade, Kt1307Service],
})
export class Kt1307Module {}
