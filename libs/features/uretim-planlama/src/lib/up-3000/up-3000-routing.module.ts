import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'up-3001',
        loadChildren: () =>
          import('./up-3001/up-3001.module').then(m => m.Up3001Module),
      },
      {
        path: 'up-3002',
        loadChildren: () =>
          import('./up-3002/up-3002.module').then(m => m.Up3002Module),
      },
      {
        path: 'up-3003',
        loadChildren: () =>
          import('./up-3003/up-3003.module').then(m => m.Up3003Module),
      },
      {
        path: 'up-3004',
        loadChildren: () =>
          import('./up-3004/up-3004.module').then(m => m.Up3004Module),
      },
      {
        path: 'up-3005',
        loadChildren: () =>
          import('./up-3005/up-3005.module').then(m => m.Up3005Module),
      },
      {
        path: 'up-3010',
        loadChildren: () =>
          import('./up-3010/up-3010.module').then(m => m.Up3010Module),
      },
      {
        path: 'up-3011',
        loadChildren: () =>
          import('./up-3011/up-3011.module').then(m => m.Up3011Module),
      },
      {
        path: 'up-3015',
        loadChildren: () =>
          import('./up-3015/up-3015.module').then(m => m.Up3015Module),
      },
      {
        path: 'up-3016',
        loadChildren: () =>
          import('./up-3016/up-3016.module').then(m => m.Up3016Module),
      },
      {
        path: 'up-3017',
        loadChildren: () =>
          import('./up-3017/up-3017.module').then(m => m.Up3017Module),
      },
      {
        path: 'up-3020',
        loadChildren: () =>
          import('./up-3020/up-3020.module').then(m => m.Up3020Module),
      },
      {
        path: 'up-3021',
        loadChildren: () =>
          import('./up-3021/up-3021.module').then(m => m.Up3021Module),
      },
      {
        path: 'up-3030',
        loadChildren: () =>
          import('./up-3030/up-3030.module').then(m => m.Up3030Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Up3000RoutingModule {}
