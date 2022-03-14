import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UretimTakipFeatureShellComponent } from './components/uretim-takip-feature-shell.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UretimTakipFeatureShellComponent,
        children: [
          {
            path: 'ut-5101',
            loadChildren: () =>
              import('./ut-5101/ut-5101.module').then(m => m.Ut5101Module),
          },
          {
            path: 'ut-5102',
            loadChildren: () =>
              import('./ut-5102/ut-5102.module').then(m => m.Ut5102Module),
          },
          {
            path: 'ut-5103',
            loadChildren: () =>
              import('./ut-5103/ut-5103.module').then(m => m.Ut5103Module),
          },
          {
            path: 'ut-5104',
            loadChildren: () =>
              import('./ut-5104/ut-5104.module').then(m => m.Ut5104Module),
          },
          {
            path: 'ut-5105',
            loadChildren: () =>
              import('./ut-5105/ut-5105.module').then(m => m.Ut5105Module),
          },
          {
            path: 'ut-5106',
            loadChildren: () =>
              import('./ut-5106/ut-5106.module').then(m => m.Ut5106Module),
          },
          {
            path: 'ut-5107',
            loadChildren: () =>
              import('./ut-5107/ut-5107.module').then(m => m.Ut5107Module),
          },
          {
            path: 'ut-5108',
            loadChildren: () =>
              import('./ut-5108/ut-5108.module').then(m => m.Ut5108Module),
          },
          {
            path: 'ut-5109',
            loadChildren: () =>
              import('./ut-5109/ut-5109.module').then(m => m.Ut5109Module),
          },
          {
            path: 'ut-6001',
            loadChildren: () =>
              import('./ut-6001/ut-6001.module').then(m => m.Ut6001Module),
          },
          {
            path: 'ut-6002',
            loadChildren: () =>
              import('./ut-6002/ut-6002.module').then(m => m.Ut6002Module),
          },
          {
            path: 'ut-6112',
            loadChildren: () =>
              import('./ut-6112/ut-6112.module').then(m => m.Ut6112Module),
          },
          {
            path: 'ut-6113',
            loadChildren: () =>
              import('./ut-6113/ut-6113.module').then(m => m.Ut6113Module),
          },
          {
            path: 'ut-6114',
            loadChildren: () =>
              import('./ut-6114/ut-6114.module').then(m => m.Ut6114Module),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class UretimTakipRoutingModule {}
