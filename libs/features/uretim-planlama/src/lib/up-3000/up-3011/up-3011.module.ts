import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Up3011Component } from './container/up-3011.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { AylikUretimPlaniModule } from '../shared/aylik-uretim-plani/aylik-uretim-plani.module';

const routes: Routes = [{ path: '', component: Up3011Component }];

@NgModule({
  declarations: [
    Up3011Component
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild(routes),
    AylikUretimPlaniModule,
    ReactiveFormsModule

  ]
})
export class Up3011Module { }
