import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'DemirUretim',
    loadChildren: () => import('./demir-uretim/demir-uretim.module').then((m) => m.DemirUretimModule),
  },
  {
    path: 'CelikUretim',
    loadChildren: () => import('./celik-uretim/celik-uretim.module').then((m) => m.CelikUretimModule),
  },
  {
    path: 'SicakHaddehaneler',
    loadChildren: () => import('./sicak-haddehaneler/sicak-haddehaneler.module').then((m) => m.SicakHaddehanelerModule),
  },
  {
    path: 'SogukHaddehaneler',
    loadChildren: () => import('./soguk-haddehaneler/soguk-haddehaneler.module').then((m) => m.SogukHaddehanelerModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class VeriGoruntulemeModule {}
