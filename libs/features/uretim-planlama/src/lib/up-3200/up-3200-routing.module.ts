import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'up-3201',
        loadChildren: () =>
          import('./up-3201/up-3201.module').then(m => m.Up3201Module),
      },
      {
        path: 'up-3220',
        loadChildren: () =>
          import('./up-3220/up-3220.module').then(m => m.Up3220Module),
      },
      {
        path: 'up-3230',
        loadChildren: () =>
          import('./up-3230/up-3230.module').then(m => m.Up3230Module),
      },
      {
        path: 'up-3231',
        loadChildren: () =>
          import('./up-3231/up-3231.module').then(m => m.Up3231Module),
      },
      {
        path: 'up-3244',
        loadChildren: () =>
          import('./up-3244/up-3244.module').then(m => m.Up3244Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Up3200RoutingModule {}
