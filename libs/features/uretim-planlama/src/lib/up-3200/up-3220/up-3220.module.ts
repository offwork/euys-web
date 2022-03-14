import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { MpcTableComponent } from './components/mpc-table/mpc-table.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { Up3220Component } from './container/up-3220.component';

const routes: Routes = [{ path: '', component: Up3220Component }];

@NgModule({
  declarations: [
    Up3220Component,
    SearchFormComponent,
    CreateFormComponent,
    UpdateFormComponent,
    MpcTableComponent,
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class Up3220Module {}
