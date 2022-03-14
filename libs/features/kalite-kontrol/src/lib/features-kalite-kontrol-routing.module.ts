import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from '@euys/shared/app-shell';

export const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'kk-8101',
        loadChildren: () =>
          import('./kk-8101/kk-8101.module').then(m => m.Kk8101Module),
      },
      {
        path: 'kk-8102',
        loadChildren: () =>
          import('./kk-8102/kk-8102.module').then(m => m.Kk8102Module),
      },
      {
        path: 'kk-8103',
        loadChildren: () =>
          import('./kk-8103/kk-8103.module').then(m => m.Kk8103Module),
      },
      {
        path: 'kk-8104',
        loadChildren: () =>
          import('./kk-8104/kk-8104.module').then(m => m.Kk8104Module),
      },
      {
        path: 'kk-8115',
        loadChildren: () =>
          import('./kk-8115/kk-8115.module').then(m => m.Kk8115Module),
      },
      {
        path: 'kk-8116',
        loadChildren: () =>
          import('./kk-8116/kk-8116.module').then(m => m.Kk8116Module),
      },
      {
        path: 'kk-8117',
        loadChildren: () =>
          import('./kk-8117/kk-8117.module').then(m => m.Kk8117Module),
      },
      {
        path: 'kk-8139',
        loadChildren: () =>
          import('./kk-8139/kk-8139.module').then(m => m.Kk8139Module),
      },
      {
        path: 'kk-8140',
        loadChildren: () =>
          import('./kk-8140/kk-8140.module').then(m => m.Kk8140Module),
      },
      {
        path: 'kk-8141',
        loadChildren: () =>
          import('./kk-8141/kk-8141.module').then(m => m.Kk8141Module),
      },
      {
        path: 'kk-8246',
        loadChildren: () =>
          import('./kk-8246/kk-8246.module').then(m => m.Kk8246Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class KaliteKontrolRoutingModule {}
