import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'CelikAylikAnaliz',
    loadChildren: () =>
      import('./cu-aylik-gecikme-analizi/cu-aylik-gecikme-analizi.module').then((m) => m.CuAylikGecikmeAnaliziModule),
  },
  {
    path: 'CelikIkiTarihAnaliz',
    loadChildren: () =>
      import('./cu-tarih-gecikme-analizi/cu-tarih-gecikme-analizi.module').then((m) => m.CuTarihGecikmeAnaliziModule),
  },
  {
    path: 'CelikTeeGrafik',
    loadChildren: () =>
      import('./cu-hedef-fiili-grafik/cu-hedef-fiili-grafik.module').then((m) => m.CuHedefFiiliGrafikModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CelikUretimModule {}
