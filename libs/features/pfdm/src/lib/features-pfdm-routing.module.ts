import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PFDMFeatureShellComponent } from './components/pfdm-feature-shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PFDMFeatureShellComponent,
        children: [
          {
            path: 'fiziksel-ozellik',
            loadChildren: () =>
              import('./fiziksel-ozellik/fiziksel-ozellik.module').then(
                m => m.FizikselOzellikModule
              ),
          },
          {
            path: 'kalite-grubu',
            loadChildren: () =>
              import('./kalite-grubu/kalite-grubu.module').then(
                m => m.KaliteGrubuModule
              ),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class PFDMRoutingModule {}
