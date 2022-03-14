import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'SogukAylikAnaliz',
    loadChildren: () =>
      import('./soguk-aylik-gecikme-analizi/soguk-aylik-gecikme-analizi.module').then(
        (m) => m.SogukAylikGecikmeAnaliziModule
      ),
  },
  {
    path: 'SogukIkiTarihAnaliz',
    loadChildren: () =>
      import('./soguk-tarih-gecikme-analizi/soguk-tarih-gecikme-analizi.module').then(
        (m) => m.SogukTarihGecikmeAnaliziModule
      ),
  },
  {
    path: 'SogukTeeGrafik',
    loadChildren: () =>
      import('./soguk-hedef-fiili-grafik/soguk-hedef-fiili-grafik.module').then((m) => m.SogukHedefFiiliGrafikModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SogukHaddehanelerModule {}
