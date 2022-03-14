import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'TeeRaporuIndir',
    loadChildren: () => import('./rapor-indirme/rapor-indirme.module').then((m) => m.RaporIndirmeModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TeeRaporuModule {}
