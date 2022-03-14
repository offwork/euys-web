import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const demoRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'EditableGrid' },
  {
    path: 'EditableGrid',
    loadChildren: () => import('./editable-grid/editable-grid.module').then((m) => m.EditableGridModule),
  },
  {
    path: 'Showcase',
    loadChildren: () => import('./showcase/showcase.module').then((m) => m.ShowcaseModule),
  },
  {
    path: 'QCKayit',
    loadChildren: () => import('./qc-kayit/qc-kayit.module').then((m) => m.QCKayitModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(demoRoutes)],
})
export class ErdemirDemoFeatureModule {}
