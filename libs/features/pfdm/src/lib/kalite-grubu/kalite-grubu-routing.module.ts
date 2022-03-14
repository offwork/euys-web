import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pfdm-3104',
    loadChildren: () =>
      import('./pfdm-3104/pfdm-3104.module').then(m => m.Pfdm3104Module),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KaliteGrubuRoutingModule {}
