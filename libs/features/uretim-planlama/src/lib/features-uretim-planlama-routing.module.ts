import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UretimPlanlamaFeatureShellComponent } from './components/uretim-planlama-feature-shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UretimPlanlamaFeatureShellComponent,
        children: [
          {
            path: 'up-3000',
            loadChildren: () =>
              import('./up-3000/up-3000.module').then(m => m.Up3000Module),
          },
          {
            path: 'up-3200',
            loadChildren: () =>
              import('./up-3200/up-3200.module').then(m => m.Up3200Module),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class UretimPlanlamaRoutingModule {}
