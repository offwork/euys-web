import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pfdm-kalinlik-cap',
    loadChildren: () =>
      import('./pfdm-kalinlik-cap/pfdm-kalinlik-cap.module').then(
        m => m.PfdmKalinlikCapModule
      ),
  },
  {
    path: 'pfdm-3101',
    loadChildren: () =>
      import('./pfdm-3101/pfdm-3101.module').then(m => m.Pfdm3101Module),
  },
  {
    path: 'pfdm-3102',
    loadChildren: () =>
      import('./pfdm-3102/pfdm-3102.module').then(m => m.Pfdm3102Module),
  },
  {
    path: 'pfdm-3103',
    loadChildren: () =>
      import('./pfdm-3103/pfdm-3103.module').then(m => m.Pfdm3103Module),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FizikselOzellikRoutingModule {}
