import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeeHedefFiiliGrafikModule } from '../../tee-hedef-fiili-grafik/tee-hedef-fiili-grafik.module';
import { SicakHedefFiiliGrafikComponent } from './container/sicak-hedef-fiili-grafik.component';

@NgModule({
  declarations: [SicakHedefFiiliGrafikComponent],
  imports: [
    CommonModule,
    TeeHedefFiiliGrafikModule,
    RouterModule.forChild([{ path: '', component: SicakHedefFiiliGrafikComponent }]),
  ],
})
export class SicakHedefFiiliGrafikModule {}
