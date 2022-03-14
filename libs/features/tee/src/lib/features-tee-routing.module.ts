import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeeFeaturesComponent } from './components/tee-features.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TeeFeaturesComponent,
        children: [
          {
            path: 'VeriGirisleri',
            loadChildren: () =>
              import('./veri-girisi/veri-girisi.module').then(
                m => m.VeriGirisiModule
              ),
          },
          {
            path: 'Goruntulemeler',
            loadChildren: () =>
              import('./veri-goruntuleme/veri-goruntuleme.module').then(
                m => m.VeriGoruntulemeModule
              ),
          },
          {
            path: 'TeeRaporu',
            loadChildren: () =>
              import('./tee-raporu/tee-raporu.module').then(
                m => m.TeeRaporuModule
              ),
          },
        ],
      },
      { path: '', pathMatch: 'full', redirectTo: 'VeriGirisleri' },
    ]),
  ],
  exports: [RouterModule],
})
export class FeaturesTeeRoutingModule {}
