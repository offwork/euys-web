import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'DuksAylikAnaliz',
    loadChildren: () =>
      import('./du-aylik-gecikme-analizi/du-aylik-gecikme-analizi.module').then((m) => m.DuAylikGecikmeAnaliziModule),
  },
  {
    path: 'DuksIkiTarihAnaliz',
    loadChildren: () =>
      import('./du-tarih-gecikme-analizi/du-tarih-gecikme-analizi.module').then((m) => m.DuTarihGecikmeAnaliziModule),
  },
  {
    path: 'DuksTeeGrafik',
    loadChildren: () =>
      import('./du-hedef-fiili-grafik/du-hedef-fiili-grafik.module').then((m) => m.DuHedefFiiliGrafikModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DemirUretimModule {}
