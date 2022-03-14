import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const veriGirisRoutes: Routes = [
  {
    path: 'KatsayiGiris',
    loadChildren: () => import('./katsayi-giris/katsayi-giris.module').then((m) => m.KatsayiGirisModule),
  },
  {
    path: 'HizGiris',
    loadChildren: () => import('./line-speeds/line-speeds.module').then((m) => m.LineSpeedsModule),
  },
  {
    path: 'DuksGiris',
    loadChildren: () =>
      import('./ksy-firinlar-standart-hiz/ksy-firinlar-standart-hiz.module').then(
        (m) => m.KsyFirinlarStandartHizModule
      ),
  },
  {
    path: 'KapasiteGiris',
    loadChildren: () => import('./kapasiteler/kapasiteler.module').then((m) => m.KapasitelerModule),
  },
  {
    path: 'HedefGiris',
    loadChildren: () => import('./hedefler/hedefler.module').then((m) => m.HedeflerModule),
  },
  {
    path: 'YillikPlan',
    loadChildren: () =>
      import('./yillik-uretim-plani/yillik-uretim-plani.module').then((m) => m.YillikUretimPlaniModule),
  },
  {
    path: 'IsgucuGiris',
    loadChildren: () => import('./isgucu-giris/isgucu-giris.module').then((m) => m.IsgucuGirisModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(veriGirisRoutes)],
})
export class VeriGirisiModule {}
