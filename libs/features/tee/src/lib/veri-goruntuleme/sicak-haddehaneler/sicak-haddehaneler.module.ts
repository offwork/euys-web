import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'SicakAylikAnaliz',
    loadChildren: () =>
      import('./sicak-aylik-gecikme-analizi/sicak-aylik-gecikme-analizi.module').then(
        (m) => m.SicakAylikGecikmeAnaliziModule
      ),
  },
  {
    path: 'SicakIkiTarihAnaliz',
    loadChildren: () =>
      import('./sicak-tarih-gecikme-analizi/sicak-tarih-gecikme-analizi.module').then(
        (m) => m.SicakTarihGecikmeAnaliziModule
      ),
  },
  {
    path: 'SicakTeeGrafik',
    loadChildren: () =>
      import('./sicak-hedef-fiili-grafik/sicak-hedef-fiili-grafik.module').then((m) => m.SicakHedefFiiliGrafikModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SicakHaddehanelerModule {}
